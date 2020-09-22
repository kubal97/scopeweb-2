import React, { useState, useEffect } from 'react';
import './navbar.scss';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect( () => {
    window.addEventListener("scroll", 
    ()=>{
      if (window.pageYOffset > 0) {
          if(!scrollPosition){
            setScrollPosition(window.pageYOffset);   
          }
      }else{
          if(scrollPosition){
            setScrollPosition(window.pageYOffset);
          }
      }
    }
    );
  })

  return (
    scrollPosition < 50 ?
    <div className="navbar">
      <div className="logo">GetJob</div>
      <ul className="navigation">
        <li className="navItem"><a href="/#">Home</a></li>
        <li className="navItem"><a href="/#">Categories</a></li>
        <li className="navItem"><a href="/#">About Us</a></li>
        <li className="navItem"><a href="/#">Our app</a></li>
        <li className="navItem"><a href="/#">Contact</a></li>
        <li className="navItem"><i className="fas fa-upload"></i><a href="/#">Upload Resume</a></li>
        <li className="navItem"><i className="fas fa-user"></i><a href="/#">My Account</a></li>
        <li className="navItem"><a href="/#">Create Account</a></li>
      </ul>
    </div>
    : 
    <div className="navbar small">
      <div className="logo">GetJob</div>
      <ul className="navigation">
        <li className="navItem"><a href="/#">Home</a></li>
        <li className="navItem"><a href="/#">Categories</a></li>
        <li className="navItem"><a href="/#">About Us</a></li>
        <li className="navItem"><a href="/#">Our app</a></li>
        <li className="navItem"><a href="/#">Contact</a></li>
        <li className="navItem"><i className="fas fa-upload"></i><a href="/#">Upload Resume</a></li>
        <li className="navItem"><i className="fas fa-user"></i><a href="/#">My Account</a></li>
        <li className="navItem"><a href="/#">Create Account</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
