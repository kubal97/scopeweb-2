import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FindProcess from './components/FindProcess';
import JobsOffers from './components/JobOffers';
import ExploreSection from './components/ExploreSection';
import JobsCategory from './components/JobsCategory';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <LandingPage />
      <FindProcess />
      <JobsOffers />
      <ExploreSection />
      <JobsCategory />
    </div>
  );
}

export default App;
