import React, { useEffect, useState, useRef } from "react";
import { BsUmbrella } from "react-icons/bs";
import SideBar from "./SideBar";
import Search from "./Search";
import ScrollReveal from "./animation/ScrollReveal";
import scrollReveal from "scrollreveal";
import "./Home.css";

function Home() {
    const [test, setTest] = useState(true);
    const spanRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            setTest(false);
            if (spanRef.current)
                scrollReveal().reveal(spanRef.current, {
                    reset: true,
                    useDelay: "always",
                    delay: 500,
                    distance: "100px",
                });
        }, 2500);
    }, []);
    return (
        <div className="home-page">
            {test ? (
                <div className="icon">
                    <ScrollReveal
                        delayTime={500}
                        x={"-50px"}
                        setEase="ease"
                        durationTime={1000}
                    >
                        <div className="takriz">
                            <BsUmbrella size="70px" color="#d4e2e1" />
                            <h2>umbrellapp</h2>
                        </div>
                    </ScrollReveal>
                </div>
            ) : (
                <div className="home-container">
                    <div className="logo">
                        <BsUmbrella size="30px" color="#d4e2e1" />
                    </div>
                    <div ref={spanRef} className="search">
                        <Search />
                    </div>
                    <SideBar />
                </div>
            )}
        </div>
    );
}

export default Home;
