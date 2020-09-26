import React from 'react';
import './mobileApp.scss';
import mobileApp from '../../assets/mobileApp.png';
import { ReactComponent as Apple} from '../../assets/apple.svg';
import { ReactComponent as GooglePlay } from '../../assets/googlePlay.svg';


const MobileApp = ({ darkMode }) => {
  return (
    <div id="app" className={darkMode ? "mobileApp darkMode" : "mobileApp"}>
        <img className="image" src={mobileApp} alt="Mobile App"/>
        <div className="download">
            <p className="subheader">Download & Enjoy</p>
            <h4 className="header">Download the <span className="green">App</span></h4>
            <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quos molestias ullam, esse autem voluptates fuga eligendi velit iure quia, architecto, voluptatum cum nisi laborum? Sint asperiores impedit in aspernatur.</p>
            <div className="buttons">
                <div className="button">
                    <Apple fill="#ffffff" className="appleButton" />
                    <div className="column">
                        <p className="tag">Download on the</p>
                        <p className="brand">App Store</p>
                    </div>
                </div>
                <div className="button">
                    <GooglePlay className="googleButton" />
                    <div className="column">
                        <p className="tag">GET IT ON</p>
                        <p className="brand">Google Play</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MobileApp;
