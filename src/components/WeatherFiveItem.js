import React from "react";
import "./WeatherFiveItem.css";
function WeatherFiveItem({ day, city, system }) {
    const dateObject = new Date(day.dt * 1000);
    const date = dateObject.toDateString().split(" ")[0];

    return (
        <div className="fiveDays">
            <h1 style={{ fontSize: "1em" }}>{date}</h1>
            <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt=""
                width="60px"
            />
            <h4
                style={{
                    color: "#4bfd74",
                    fontSize: "0.95em",
                }}
            >
                {Math.floor(day.temp.max)} °C
            </h4>
            <h4
                style={{
                    color: "#4bfd74be",
                    fontSize: "0.95em",
                }}
            >
                {Math.floor(day.temp.min)} °C
            </h4>
        </div>
    );
}

export default WeatherFiveItem;
