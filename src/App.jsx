import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route, useHistory, useLocation } from 'react-router-dom';
import './assets/scss/Style.scss';
import Header from './components/layout/Header.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import Admin from './pages/Admin.jsx';
import Member from './pages/Member.jsx';
import Test from './pages/Test.jsx';
import Footer from './components/layout/Footer.jsx';
import Sidebar from './components/layout/Sidebar.jsx';

const App = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname == "/admin" ? 
      <>
        <Sidebar />
        <div className="adminPanel">
          <Routes>
            <Route path="/admin" element={ <Admin /> } />
          </Routes>
        </div>
      </>
      : 
      <>
        <Header />
        <div className="AppSection">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/info" element={ <Info /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/booking" element={ <Booking /> } />
            <Route path="/member" element={ <Member /> } />
            <Route path="/test" element={ <Test /> } />
          </Routes>
        </div>
        <Footer />
      </>
      }
    </>
  );
}

export default App;
