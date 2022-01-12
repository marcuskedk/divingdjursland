import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import navi from "../../helpers/navigation.json";

const Header = () => {
      
    const [showHeader, setShowHeader] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

        const handleScroll = () => {
            console.log("top", document.body.getBoundingClientRect().top);
            console.log();
            if (document.body.getBoundingClientRect().top < -116) {
                setScrollPos(document.body.getBoundingClientRect().top);
                setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
            }
        };
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            }; 
        });

    return (
        <>
            <header>
                <div className="top">
                    <div className="container">
                        <a href="" className="logo">
                            <img src="../img/DD.png" width={100} alt="" />
                            <span className="title">Diving Djursland</span>
                        </a>
                    </div>
                </div>
                <div className={`bottom ${showHeader ? "bottom-fixed" : ""}`}>
                    <div className="container">
                        <ul>
                            {navi.navigation.map(( item, index ) => 
                                <li key={ navi.navigation[index].id }>
                                    <NavLink activeClassName="active" to={ navi.navigation[index].link }>{ navi.navigation[index].title }</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;