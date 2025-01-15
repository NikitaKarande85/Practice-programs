import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HeaderComponent from './Header/HeaderComponent';
import ScheduledContent from './ScheduledContent/ScheduledContent';


import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className='main'>
      <HeaderComponent />
      <Router>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/view" element={<ScheduledContent />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
