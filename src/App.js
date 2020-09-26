import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import FindProcess from './components/FindProcess';
import JobsOffers from './components/JobOffers';
import ExploreSection from './components/ExploreSection';
import JobsCategory from './components/JobsCategory';
import CompanyPosts from './components/CompanyPosts';
import AboutUs from './components/AboutUs';
import MobileApp from './components/MobileApp';
import Newsletter from './components/Newsletter';
import CreateAccount from './components/CreateAccount';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode])

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div className={darkMode ? "wrapper darkMode" : "wrapper lightMode"}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <LandingPage />
      <FindProcess darkMode={darkMode} />
      <JobsOffers darkMode={darkMode} />
      <ExploreSection darkMode={darkMode} />
      <JobsCategory darkMode={darkMode} />
      <CompanyPosts darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
      <MobileApp darkMode={darkMode} />
      <Newsletter darkMode={darkMode} />
      <CreateAccount darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
