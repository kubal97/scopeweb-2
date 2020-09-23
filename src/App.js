import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FindProcess from './components/FindProcess';
import JobsOffers from './components/JobOffers';
import ExploreSection from './components/ExploreSection';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <LandingPage />
      <FindProcess />
      <JobsOffers />
      <ExploreSection />
    </div>
  );
}

export default App;
