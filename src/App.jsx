import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route } from 'react-router-dom';
import './Style.scss';
import Header from './components/layout/Header.jsx';
import Home from './pages/Home.jsx';
import Info from "./pages/Info.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/info" element={ <Info /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/booking" element={ <Booking /> } />
      </Routes>
    </>
  );
}

export default App;
