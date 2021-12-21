import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainWeather.css";
import SideBar from "./SideBar";
import { BsUmbrella, BsHeart } from "react-icons/bs";
import WeatherItem from "./WeatherItem";
import WeatherFiveItem from "./WeatherFiveItem";
import ScrollReveal from "./animation//ScrollReveal";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function MainWeather() {
    const [cityWeather, setCityWeather] = useState([]);
    const [weatherDetails, setWeatherDetails] = useState({});
    const [system, setSystem] = useState({});
    const [loading, setLoading] = useState(true);
    const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
    const city = localStorage.getItem("city");
    const lon = localStorage.getItem("lon");
    const lat = localStorage.getItem("lat");
    const navigate = useNavigate();
    const getCurrentWeather = () => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751730611ff62810179139c9244bc34c&units=metric`
            )
            .then(async (response) => {
                await setCityWeather([response.data.main]);
                await setWeatherDetails(response.data.weather[0]);
                await setSystem(response.data.sys);
                await setLoading(false);
            })
            .catch((error) => console.dir(error));
    };

    const getFiveDaysWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=751730611ff62810179139c9244bc34c`
            )
            .then((response) => {
                setFiveDaysWeather(response.data.daily.slice(1, 6));
                console.log("weather", response.data.daily.slice(1, 6));
            })
            .catch((error) => console.dir(error));
    };

    useEffect(() => {
        getCurrentWeather();
        getFiveDaysWeather();
    }, [city, lon, lat]);

    return (
        <div className="main-weather">
            <nav>
                <SideBar />
                <button name="home" onClick={() => navigate("/")}>
                    <BsUmbrella size="30px" color="#d4e2e1" />
                </button>
                <BsHeart size="20px" color="#f2f2f2" />
            </nav>
            {loading ? (
                <div className="spinner">
                    <BeatLoader color={"#6FFE90"} size={20} />
                </div>
            ) : (
                <section id="weather-section">
                    <div className="today-weather">
                        <ScrollReveal
                            delayTime={500}
                            durationTime={1000}
                            setEase={"cubic-bezier(0.5, 0, 0, 1)"}
                        >
                            {cityWeather.map((elt, index) => {
                                return (
                                    <div key={index}>
                                        <WeatherItem
                                            elt={elt}
                                            weatherDetails={weatherDetails}
                                            city={city}
                                            system={system}
                                        />
                                    </div>
                                );
                            })}
                        </ScrollReveal>
                    </div>
                    <div className="next-five-days">
                        {fiveDaysWeather.map((day, index) => {
                            return (
                                <div key={index}>
                                    <ScrollReveal
                                        delayTime={1200}
                                        durationTime={1500}
                                        setEase={"ease"}
                                    >
                                        <WeatherFiveItem
                                            day={day}
                                            city={city}
                                            system={system}
                                        />
                                    </ScrollReveal>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
        </div>
    );
}

export default MainWeather;
