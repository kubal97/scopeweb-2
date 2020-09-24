import React from 'react';
import './footer.scss';
import Logo from '../../assets/logo.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Pin } from '../../assets/pin.svg';
import { ReactComponent as Facebook } from '../../assets/facebookThin.svg';
import { ReactComponent as Twitter } from '../../assets/twitterThin.svg';
import { ReactComponent as Instagram } from '../../assets/instagramThin.svg';


const Footer = () => {
  return (
    <div className="footer">
        <div className="content">
            <div className="column">
                <img src={Logo} alt="Logo" className="logo"/>
                <p className="description">Getjob wonderful serenity has taken possession<br /> of my entire soul, like these sweet mornings of<br /> spring which I enjoy with my whole heart.</p>
                <div className="row"><Email fill="#888888" className="icon" />info@get-tutors.com</div>
                <div className="row"><Pin fill="#888888" className="icon" />59 West 46th Street, <br />New York City.</div>
                <div className="rowSocial">
                    <button href="/#" className="circle"><Facebook fill="#cccccc" className="iconSocial" /></button>
                    <button href="/#" className="circle"><Twitter fill="#cccccc" className="iconSocial" /></button>
                    <button href="/#" className="circle"><Instagram fill="#cccccc" className="iconSocial" /></button>
                </div>
            </div>
            <div className="column">
                <h5 className="header">Categories</h5>
                <a href="/#" className="link">ios Developers</a>
                <a href="/#" className="link">Front-End Developers</a>
                <a href="/#" className="link">UX Designers</a>
                <a href="/#" className="link">UI Designers</a>
                <a href="/#" className="link">Writing Translation</a>
                <a href="/#" className="link">Program & Tech</a>
            </div>
            <div className="column">
                <h5 className="header">Community</h5>
                <a href="/#" className="link">Events</a>
                <a href="/#" className="link">Blog</a>
                <a href="/#" className="link">Forum</a>
                <a href="/#" className="link">Podcast</a>
                <a href="/#" className="link">Affiliates</a>
                <a href="/#" className="link">Invite a Friend</a>
            </div>
            <div className="column">
                <h5 className="header">About</h5>
                <a href="/#" className="link">About Us</a>
                <a href="/#" className="link">Partnership</a>
                <a href="/#" className="link">Finance Experts</a>
                <a href="/#" className="link">Project Management</a>
                <a href="/#" className="link">Product Manager</a>
                <a href="/#" className="link">The Team</a>
            </div>
            <div className="column">
                <h5 className="header">Contact</h5>
                <a href="/#" className="link">Contact Us</a>
                <a href="/#" className="link">Press Center</a>
                <a href="/#" className="link">Careers</a>
                <a href="/#" className="link">Faq</a>
            </div>
        </div>
        <div className="copywright">
            <p className="author">&#x24B8; 2020 All Right Reserved by getjob.com design by Madhu</p>
        </div>
    </div>
  );
}

export default Footer;
