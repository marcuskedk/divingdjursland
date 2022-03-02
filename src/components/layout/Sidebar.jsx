import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
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

    return (
        <>
            <nav className="panel-header">
                <div className="px-2 row">
                    <div className="col-lg-6 d-flex panel-brand">
                        <a href="/"><img src="../img/Scuba-Logo.png" width={100} alt="" /></a>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </nav>
            <nav className="sidebar px-2">
                <div className="navbar-sidebar collapse">
                    <ul className="navbar-sidebar-menu">
                        <li className="sidebar-item">
                            {/* <a href="/admin" className="sidebar-link">Dashboard</a> */}
                            <NavLink className="sidebar-link" activeclassname="active" to="/admin?page=dashboard">Dashboard</NavLink>
                        </li>
                        <li className="sidebar-dropdown">
                            <button className='sidebar-button' type="button" onClick={bookingToggleD}>Tilmeldninger {BookingToggleDropdown ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} /> }</button>
                            {BookingToggleDropdown &&
                                <ul className='sidebar-dropdown-menu'>
                                    <li className='sidebar-dropdown-item'><a className='sidebar-dropdown-link' href="/admin?page=registration-awaiting">Afventer</a></li>
                                    <li className='sidebar-dropdown-item'><a className='sidebar-dropdown-link' href="/admin?page=registration-accepted">Godkendte</a></li>
                                    <li className='sidebar-dropdown-item'><a className='sidebar-dropdown-link' href="/admin?page=registration-rejected">Afviste</a></li>
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