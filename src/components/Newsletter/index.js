import React from 'react';
import './newsletter.scss';
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Send } from '../../assets/send.svg'


const Newsletter = () => {
  return (
    <div id="contact" className="newsletter">
        <div className="content">
            <h4 className="newsHeader">Subscribe <span className="green">Newsletter</span> & get <br/>Company News.</h4>
            <div className="inputContainer">
                <Email fill="#C9C8CC" className="email" />
                <input type="email" className="input"/>
                <button className="subscribeButton"><Send fill="#ffffff" className="send" />Subscribe</button>
            </div>
        </div>
    </div>
  );
}

export default Newsletter;