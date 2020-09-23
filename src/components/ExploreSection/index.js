import React from 'react';
import './exploreSection.scss';
import exploreSection from '../../assets/exploreSection.png';

const ExploreSection = () => {
  return (
    <div className="exploreSection">
        <img className="image" src={exploreSection} alt="Explore Section"/>
        <div className="explore">
            <h4 className="header">Get World <span className="green">20,000+</span> talented people in one place.</h4>
            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="exploreButton">Explore More</button>
        </div>
    </div>
  );
}

export default ExploreSection;
