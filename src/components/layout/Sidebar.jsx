import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes, faBars, faHome, faSwatchbook, faCheckCircle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const windowDims = () => ({

  height: window.innerHeight,
  width: window.innerWidth,

});

const Sidebar = () => {
    const location = useLocation()

    const [dimensions, setDimensions] = useState(windowDims());
    // const check = item;
  
    useEffect(() => {
  
        const handleResize = () => {
            setDimensions(windowDims());
            console.log(windowDims());
        };
  
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
  
    }, []);
  
    const breakpoint = 922;
  
    if (dimensions.width < breakpoint) {
      document.getElementById('root').classList.add('mobileView', 'sidebar-closed')
    } else {
      document.getElementById('root').classList.remove('mobileView', 'sidebar-closed')
    }

    const [BookingToggleDropdown, setBookingToggleDropdown] = useState(false)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const bookingToggleD = () => {
        if (BookingToggleDropdown == false) {
            setBookingToggleDropdown(true)
        } else {
            setBookingToggleDropdown(false)
        }
        // console.log(toggleDropdown)
    }

    const toggleD = () => {
        if (toggleDropdown == false) {
            setToggleDropdown(true)
        } else {
            setToggleDropdown(false)
        }
        // console.log(toggleDropdown)
    }

    const [ sidebarActive, setSidebar ] = useState(false)
    console.log("her 1 ", sidebarActive)

    let bull = true

    if (dimensions.width < breakpoint && sidebarActive == false) {
        setSidebar(true)
        bull = false
    }

    // console.log("her 2 ", sidebarActive)
    const closeSidebar = () => {
        // if (document.querySelector('.mobileView.sidebar-closed')) {
        //     setSidebar(false)
        //     document.getElementById('root').classList.remove('sidebar-closed')
        // } else {
            if (sidebarActive === false) {
                setSidebar(true)
                document.getElementById('root').classList.add('sidebar-closed')
                console.log("her 3 ", sidebarActive)
            } else {
                setSidebar(false)
                document.getElementById('root').classList.remove('sidebar-closed')
                console.log("her 4 ", sidebarActive)
            }
        // }
        console.log(sidebarActive)

    }

    return (
        <>
            <nav className="panel-header">
                <div className="px-2 row">
                    <div className="col-lg-6 d-flex panel-brand">
                        <a href="/"><img src="../img/Scuba-Logo.png" width={100} alt="" /></a>
                    </div>
                    <div className="col-lg-6">
                    
                    </div>
                </div>
            </nav>
            <nav className="sidebar px-2">
                <div className="close-sidebar">
                    <FontAwesomeIcon onClick={closeSidebar} icon={ sidebarActive ? faBars : faTimes} />
                </div>
                <div className="navbar-sidebar collapse">
                    <ul className="navbar-sidebar-menu">
                        <li className="sidebar-item">
                            <a href="/admin?page=dashboard" className={`sidebar-link ${location.search == '?page=dashboard' ? 'active' : 'notactive'}`}><span className='sidebar-icon'><FontAwesomeIcon icon={faHome} /></span> <span className='sidebar-title'>Dashboard</span></a>
                        </li>
                        <li className="sidebar-dropdown">
                            <button className={`sidebar-button ${location.search == '?page=registration-awaiting' || location.search == '?page=registration-accepted' || location.search == '?page=registration-rejected' ? 'active' : 'notactive'}`} type="button" onClick={bookingToggleD}><span className='sidebar-icon'><FontAwesomeIcon icon={faSwatchbook} /></span> <span className='sidebar-title'>Tilmeldninger</span> {BookingToggleDropdown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} /> }</button>
                            {BookingToggleDropdown &&
                                <ul className='sidebar-dropdown-menu'>
                                    <li className="sidebar-dropdown-item"><a className={`sidebar-dropdown-link ${location.search == '?page=registration-awaiting' ? 'active' : 'notactive'}`} href="/admin?page=registration-awaiting"><span className='sidebar-icon'><FontAwesomeIcon icon={faQuestionCircle} /></span> <span className='sidebar-title'>Afventer</span></a></li>
                                    <li className="sidebar-dropdown-item"><a className={`sidebar-dropdown-link ${location.search == '?page=registration-accepted' ? 'active' : 'notactive'}`} href="/admin?page=registration-accepted"><span className='sidebar-icon'><FontAwesomeIcon icon={faCheckCircle} /></span> <span className='sidebar-title'>Godkendte</span></a></li>
                                    <li className="sidebar-dropdown-item"><a className={`sidebar-dropdown-link ${location.search == '?page=registration-rejected' ? 'active' : 'notactive'}`} href="/admin?page=registration-rejected"><span className='sidebar-icon'><FontAwesomeIcon icon={faTimesCircle} /></span> <span className='sidebar-title'>Afviste</span></a></li>
                                </ul>
                            }
                        </li>
                    </ul>
                    <ul className="navbar-sidebar-menu mt-auto">
                        <li className="sidebar-item">
                            <a href="/" className="sidebar-link">Tilbage til forside</a>
                        </li>
                        <li className="sidebar-item">
                            <a href="/logout" className="sidebar-link">Log ud</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar