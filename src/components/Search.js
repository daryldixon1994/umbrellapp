import React, { useState } from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";
import { useNavigate } from "react-router";
import axios from "axios";

function Search() {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handelChange = (e) => {
        setInput(e.target.value);
    };

    const handelSearch = () => {
        if (input) {
            axios
                .get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=751730611ff62810179139c9244bc34c`
                )
                .then(async (response) => {
                    await localStorage.setItem("city", input);
                    await localStorage.setItem("lat", response.data[0].lat);
                    await localStorage.setItem("lon", response.data[0].lon);
                    navigate("/weather");
                    setError(false);
                })
                .catch((error) => console.dir(error));
        } else {
            setError(true);
        }
    };

    return (
        <div className="search-container">
            <h3>type a location</h3>
            <div className="search-box">
                <input
                    placeholder="type here ..."
                    type="text"
                    value={input}
                    onChange={handelChange}
                />
                <label>
                    <FiSearch size="22px" />
                    <input type="checkbox" onClick={handelSearch} />
                </label>
            </div>
            {error ? (
                <h3 style={{ color: "red" }}>
                    * Empty field, please enter a valid city.
                </h3>
            ) : null}
            <h3>or give us your location</h3>
            <button name="search" type="button">
                <TiLocationArrow size="35px" />
                access location
            </button>
        </div>
    );
}

export default Search;
