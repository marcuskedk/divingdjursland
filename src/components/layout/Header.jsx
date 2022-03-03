import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import * as ReactDOM from "react-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import locales from "../../helpers/locales.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const languages = [
  {
    code: 'da',
    name: 'Dansk',
    country_code: 'https://img.icons8.com/color/48/000000/denmark-circular.png',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'https://img.icons8.com/color/48/000000/usa-circular.png',
  }
]

const Header = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
  
    useEffect(() => {
      document.body.dir = currentLanguage.dir || 'ltr'
      document.title = t('app_title')
    }, [currentLanguage, t])
    
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
    };

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
                            {locales.navigation.map(( item, index ) => 
                                <li key={ locales.navigation[index].id }>
                                    <NavLink activeclassname="active" to={ locales.navigation[index].link }>{t('navigation.'+index+'.title')}</NavLink>
                                </li>
                            )}
                        </ul>
                        <ul className="right-menu">
                            <li className={isActive ? 'dropdown': 'dropdown active'}>
                                <a className="dropdown-link" onClick={toggleClass}>{ currentLanguage.code == "da" ? t('lang.da') : t('lang.en') } <FontAwesomeIcon icon={faChevronDown} /></a>
                                <ul className="dropdown-menu">
                                    {languages.map(({ code, name, country_code }) => (
                                        <li key={country_code}>
                                            <a href="#" className={classNames('dropdown-item', { disabled: currentLanguageCode === code, })} onClick={() => { i18next.changeLanguage(code) }}>
                                                <span className="flag-icon"><img src={ country_code }/></span>
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;