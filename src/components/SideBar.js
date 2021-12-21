import React, { useState } from "react";
import { VscChromeClose, VscListFlat } from "react-icons/vsc";
import { BsDashLg } from "react-icons/bs";
import { GrGooglePlus } from "react-icons/gr";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import "./SideBar.css";
function SideBar() {
    const [close, setClose] = useState(false);
    const handelClose = () => {
        setClose(false);
    };
    const handelOpen = () => {
        setClose(true);
    };
    return (
        <div>
            {close ? (
                <div className={close ? "side-bar" : "hide-side-bar"}>
                    <button name="close" title="close" onClick={handelClose}>
                        <VscChromeClose size="25px" color="#a970ff" />
                    </button>
                    <p>Your best weather app</p>
                    <div>
                        <BsDashLg size="25px" color="#a970ff" />
                    </div>
                    <ul>
                        <li>
                            <a href="#">team</a>
                        </li>
                        <li>
                            <a href="#">history</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                    <h6>suggest to friend</h6>
                    <div className="social-logos">
                        <a href="#">
                            <RiFacebookFill size="25px" color="#a970ff" />
                        </a>
                        <a href="#">
                            <RiTwitterFill size="25px" color="#a970ff" />{" "}
                        </a>
                        <a href="#">
                            <GrGooglePlus size="25px" color="#a970ff" />
                        </a>
                    </div>
                </div>
            ) : (
                <div className="list">
                    <button name="open" onClick={handelOpen}>
                        <VscListFlat size="35px" color="#6ffe90" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default SideBar;
