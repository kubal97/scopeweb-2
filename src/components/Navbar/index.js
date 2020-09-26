import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import Switch from '../Switch';
import Logo from '../../assets/logo.svg'
import LogoWhite from '../../assets/logoWhite.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';

const Navbar = ({setDarkMode, darkMode}) => {
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

  const toggleNavigation = () => {
    console.log('test');
    let navigation = document.querySelector('.navigation');
    let hamburger = document.querySelector('.hamburger');
    if(hamburger.style.display !== 'none') navigation.style.display === 'flex' ? navigation.style.display = 'none' : navigation.style.display = 'flex';
  }

  return (
    <nav className={scrollPosition < 50 ? "navbar" : (darkMode ? "navbar small navDarkMode" : "navbar small")}>
      <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={1000} >
          <img className="logo" src={(darkMode & scrollPosition >= 50) ? LogoWhite : Logo} alt="Logo"/>
      </Link>
      <Switch darkMode={darkMode} change={() => setDarkMode(prevMode => !prevMode)} />
      <div className="navigation">
        <Link className="navItem" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={1000} >Home</Link>
        <Link className="navItem" activeClass="active" to="categories" spy={true} smooth={true} offset={-70} duration={1000} >Categories</Link>
        <Link className="navItem" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1000} >About Us</Link>
        <Link className="navItem" activeClass="active" to="app" spy={true} smooth={true} offset={-150} duration={1000} >Our App</Link>
        <Link className="navItem" activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={1000} >Contact</Link>
        <li className="navItem">
          <label htmlFor="files"><i className="fas fa-upload" />Upload Resume</label>
          <input id="files" type="file" style={{display:"none"}}/>
        </li>
        <li className="navItem"><i className="fas fa-user"></i><a href="/#">My Account</a></li>
        <li className="navItem"><a href="/#">Create Account</a></li>
      </div>
      <Hamburger fill="#aaaaaa" onClick={toggleNavigation} className="hamburger" />
    </nav>
  );
}

export default Navbar;
