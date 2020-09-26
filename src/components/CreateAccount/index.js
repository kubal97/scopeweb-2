import React from 'react';
import './createAccount.scss';

const CreateAccount = ({ darkMode }) => {
  return (
    <div className={darkMode ? "createAccount darkMode" : "createAccount"}>
        <div className="container">
            <div className="text">
                <h4 className="header">Ready to get started?</h4>
                <p className="tagline">Create an account and refer your friend</p>
            </div>
            <button className="createButton">Create free Account</button>
        </div>
    </div>
  );
}

export default CreateAccount;