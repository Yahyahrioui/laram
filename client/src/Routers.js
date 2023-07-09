import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import History from './History'
import Home from './Home';
import Navbar from './Navbar';
import Statistics from './Statistics';

function Routers() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Router>
    );
}

export default Routers