import React from 'react';
import './companyPosts.scss';
import companyPosts from '../../assets/companyPosts.png';
import companyPostsDark from '../../assets/companyPostsDark.png';

const CompanyPosts = ({ darkMode }) => {
  return (
    <div className={darkMode ? "companyPosts darkMode" : "companyPosts"}>
        <div className="posts">
            <h4 className="header"><span className="green">1000+</span> world top company post there job in here.</h4>
            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="postsButton">Create free Account</button>
        </div>
        <img className="image" src={darkMode ? companyPostsDark : companyPosts} alt="Company Posts"/>
    </div>
  );
}

export default CompanyPosts;
