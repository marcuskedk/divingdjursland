import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import navi from "../../helpers/navigation.json";

const Header = () => {
    const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const currentScrollY = 0;
  const breakpoint = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
    //   if (prevScrollY.current < currentScrollY && goingUp) {
    //     setGoingUp(false);
    //   }
    //   if (prevScrollY.current > currentScrollY && !goingUp) {
    //     setGoingUp(true);
    //   }

    if (prevScrollY.current < 175) {
        setGoingUp(true);
    } else {
        setGoingUp(false);
    }

      prevScrollY.current = currentScrollY;
    //   console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
    return (
        <>
            <header className={currentScrollY + goingUp ? '' : 'fixed'}>
               
                
                <div className="top">
                    <div className="container">
                    <a href="" className="logo">
                            <img src="../img/Scuba-Logo.png" width={100} alt="" />
                            <span className="title">Diving Djursland</span>
                        </a>
                    </div>
                </div>
                <div className={`bottom`}>
                    <div className="container menu-flex">
                        <ul className="left-menu">
                            {navi.navigation.map(( item, index ) => 
                                <li key={ navi.navigation[index].id }>
                                    <NavLink activeClassName="active" to={ navi.navigation[index].link }>{ navi.navigation[index].title }</NavLink>
                                </li>
                            )}
                        </ul>
                        <ul className="right-menu">
                            <li>
                                <a href=""></a>
                                <ul>
                                    <li><a href="">DANSK</a></li>
                                </ul>
                                <NavLink activeClassName="active" to=""><img src="https://img.icons8.com/color/48/000000/denmark-circular.png"/></NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to=""><img src="https://img.icons8.com/color/48/000000/usa-circular.png"/></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;