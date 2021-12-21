import React from "react";
import "./App.css";
import MainWeather from "./components/MainWeather";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/weather" element={<MainWeather />} />
            </Routes>
        </div>
    );
}

export default App;
