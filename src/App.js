import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Home from './Components/Homepage/Home';
import Footer from './Components/Footer/Footer';
import Astrologers from './Components/Astrologers /Astrologers';
import TalkAstrologer from './Components/TalkAstrologer/TalkAstrologer';
import FreeKundali from './Components/FreeKundali/FreeKundali';
import Horoscope from './Components/Horoscope/Horoscope';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/astrologers' element={<Astrologers/>} />
          <Route path='/talkastrologer' element={<TalkAstrologer/>} />
          <Route path='/freekundali' element={<FreeKundali />} />
          <Route path='/horoscope' element={<Horoscope />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
