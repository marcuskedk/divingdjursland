import React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import './Style.scss';
import Header from './components/layout/Header.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx';
import Admin from './pages/Admin.jsx';
import Member from './pages/Member.jsx';
import Test from './pages/Test.jsx';
import Footer from './components/layout/Footer.jsx';

const App = () => {

  return (
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
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
