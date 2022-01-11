import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import navi from "../../helpers/navigation.json";

const Header = () => {
    return (
        <>
            <header>
                <div className="top">
                    <div className="container">
                        <a href="" className="logo">
                            <img src="" alt="" />
                            <span>Diving Djursland</span>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <ul>
                            {navi.navigation.map(( item, index ) => 
                                <li key={ navi.navigation[index].id }>
                                    <Link to={ navi.navigation[index].link }>{ navi.navigation[index].title }</Link>
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