import React from 'react';
import './aboutUs.scss';
import { ReactComponent as Quotes } from '../../assets/quotes.svg';


const About = ({ avatar, opinion, name, position, color }) => {
  return (
    <div className="about">
        <div className="avatar">
            <img className="image" src={avatar} alt="Avatar" />
            <div className="circle" style={{backgroundColor:color}}><Quotes fill="#ffffff" className="quotes"></Quotes></div>
        </div>
        <p className="opinion">{opinion}</p>
        <hr className="line"/>
        <p className="name">{name}</p>
        <p className="position">{position}}</p>
    </div>
  );
}

export default About;
