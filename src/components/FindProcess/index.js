import React from 'react';
import './findProcess.scss';
import {ReactComponent as ArrowRight} from '../../assets/right-arrow.svg'

const FindProcess = ({darkMode}) => {
  return (
    <div className={darkMode ? "findProcess darkMode" : "findProcess"}>
        <div className="process">
            <div className="step">
                <div className="rectangle blue"><i className="far blue fa-user"></i></div>
                <p className="head">Account</p>
                <p className="body">First you need to create an Account in here.</p>
            </div>
            <ArrowRight className="arrowRight" fill="#54BD7F"/>
            <div className="step">
                <div className="rectangle orange"><i className="fas orange fa-upload"></i></div>
                <p className="head">CV/Resume</p>
                <p className="body">For a job you have to upload your best CV or Resume.</p>
            </div>
            <ArrowRight className="arrowRight" fill="#54BD7F"/>
            <div className="step">
                <div className="rectangle green"><i className="fas green fa-search"></i></div>
                <p className="head">Quick Jobs</p>
                <p className="body">Find your best job by using search or categories.</p>
            </div>
            <ArrowRight className="arrowRight" fill="#54BD7F"/>
            <div className="step">
                <div className="rectangle purple"><i className="fas purple fa-plug"></i></div>
                <p className="head">Apply them</p>
                <p className="body">Finally you apply your job and enjoy your Work.</p>
            </div>
        </div>
    </div>
  );
}

export default FindProcess;
