import React from 'react';
import './aboutUs.scss';
import About from './about';
import { about } from '../../assets/data';


const AboutUs = ({ darkMode }) => {
  return (
    <div id="about" className={darkMode ? "aboutUs darkMode" : "aboutUs"}>
        <h4 className="header">What says <span className="green">jobholders</span> <br /> about us</h4>
        <div className="container">
            {about.map(card => {
                return <About key={card.id} avatar={card.avatar} opinion={card.opinion} name={card.name} position={card.position} color={card.color} />
            })}
        </div>
    </div>
  );
}

export default AboutUs;
