import React from 'react';
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
  return (
    <div className="wrapper">
      <Navbar />
      <LandingPage />
      <FindProcess />
      <JobsOffers />
      <ExploreSection />
      <JobsCategory />
      <CompanyPosts />
      <AboutUs />
      <MobileApp />
      <Newsletter />
      <CreateAccount />
      <Footer />
    </div>
  );
}

export default App;
