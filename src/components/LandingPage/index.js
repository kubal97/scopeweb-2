import React from 'react';
import './landingPage.scss';
import Google from '../../assets/google.svg'
import Behance from '../../assets/behance.svg'
import Instagram from '../../assets/instagram.svg'
import Windows from '../../assets/windows.svg'

const LandingPage = () => {
  return (
    <div id="home" className="landingPage">
        <div className="container">
            <div className="new"><p className="newText">NEW</p><h3 className="stayConnect">Stay connect to Get upcoming job with #Getjob</h3></div>
            <h1 className="header">Find your job &<br /> make sure goal.</h1>
            <h2 className="subheader">Your dream job is waiting for you</h2>
            <div className="search">
                <input className="searchInput" placeholder="Job title or keywords" type="text"/>
                <input className="searchInput" placeholder="City or ZIP code" type="text"/>
                <button className="searchButton"><i className="fas fa-search"></i></button>
            </div>
            <div className="companies">
                <p className="companiesHeader">We are trusted by:</p>
                <div className="icons">
                    <div className="icon"><img src={Google} alt="Google"/></div>
                    <div className="icon"><img src={Behance} alt="Behance"/></div>
                    <div className="icon"><img src={Instagram} alt="Instagram"/></div>
                    <div className="icon"><img src={Windows} alt="Windows"/></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
