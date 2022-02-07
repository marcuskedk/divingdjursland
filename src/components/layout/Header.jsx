import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import navi from "../../helpers/navigation.json";

const Header = () => {
    return (
        <>
            <header>
               
                
                <div className="bottom">
                    <div className="container">
                    <a href="" className="logo">
                            <img src="../img/Scuba-Logo.png" width={100} alt="" />
                            <span className="title">Diving Djursland</span>
                            </a>
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