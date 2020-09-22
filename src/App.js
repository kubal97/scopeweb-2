import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
