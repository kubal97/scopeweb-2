import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FindProcess from './components/FindProcess';
import JobsOffers from './components/JobOffers';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <LandingPage />
      <FindProcess />
      <JobsOffers />
    </div>
  );
}

export default App;
