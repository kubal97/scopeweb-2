import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import Logo from '../../assets/logo.svg'

const Navbar = () => {
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
      <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} >
          <img className="logo" src={Logo} alt="Logo"/>
      </Link>
      <ul className="navigation">
        <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">Home</a>
        </Link>
        <Link className="navItem" activeClass="active" to="categories" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">Categories</a>
        </Link>
        <Link className="navItem" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">About Us</a>
        </Link>
        <Link className="navItem" activeClass="active" to="app" spy={true} smooth={true} offset={-150} duration={500} >
          <a href="/#">Our App</a>
        </Link>
        <Link className="navItem" activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} >
          <a href="/#">Contact</a>
        </Link>
        <li className="navItem">
          <label htmlFor="files"><i className="fas fa-upload" />Upload Resume</label>
          <input id="files" type="file" style={{display:"none"}}/>
        </li>
        <li className="navItem"><i className="fas fa-user"></i><a href="/#">My Account</a></li>
        <li className="navItem"><a href="/#">Create Account</a></li>
      </ul>
    </div>
    : 
    <div className="navbar small">
      <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} >
          <img className="logo" src={Logo} alt="Logo"/>
      </Link>
      <ul className="navigation">
        <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">Home</a>
        </Link>
        <Link className="navItem" activeClass="active" to="categories" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">Categories</a>
        </Link>
        <Link className="navItem" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} >
          <a href="/#">About Us</a>
        </Link>
        <Link className="navItem" activeClass="active" to="app" spy={true} smooth={true} offset={-150} duration={500} >
          <a href="/#">Our App</a>
        </Link>
        <Link className="navItem" activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} >
          <a href="/#">Contact</a>
        </Link>
        <li className="navItem">
          <label htmlFor="files"><i className="fas fa-upload" />Upload Resume</label>
          <input id="files" type="file" style={{display:"none"}}/>
        </li>
        <li className="navItem"><i className="fas fa-user"></i><a href="/#">My Account</a></li>
        <li className="navItem"><a href="/#">Create Account</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
