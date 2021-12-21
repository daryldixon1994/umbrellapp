import React from "react";
import "./WeatherItem.css";
function WeatherItem({ elt, weatherDetails, city, system }) {
    return (
        <div>
            <h1>TODAY</h1>
            <h2>
                {city.charAt(0).toUpperCase() + city.slice(1)}, {system.country}
            </h2>
            <h5>{weatherDetails.main}</h5>
            <img
                src={`http://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`}
                alt=""
                width="110px"
            />
            <h4 style={{ color: "#4bfd74" }}>{Math.floor(elt.temp_max)} °C</h4>
            <h4 style={{ color: "#4bfd74be" }}>
                {Math.floor(elt.temp_min)} °C
            </h4>
        </div>
    );
}

export default WeatherItem;
