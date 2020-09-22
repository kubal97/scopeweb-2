import React from 'react';
import './jobOffers.scss';
import { ReactComponent as Bookmark} from '../../assets/bookmark.svg';
import Face1 from '../../assets/face1.jpg';
import Face2 from '../../assets/face2.jpg';
import Face3 from '../../assets/face3.jpg';

const Offer = ({ logo, name, work, body }) => {
  return (
    <div className="offer">
        <div className="head">
            <div className="wrapper">
                <img className="logo" src={logo} alt="Instagram"/>
                <div className="middle">
                    <p className="name">{name}</p>
                    <p className="work">{work}</p>
                    <p className="when">2 days ago</p>
                </div>
            </div>
            <div className="end">
                <Bookmark className="favourite" />
                <div className="type">Full Time</div>
            </div>
        </div>
        <p className="body">{body}</p>
        <div className="footer">
            <button className="apply">Apply Now</button>
            <div className="faces">
                <img className="face" src={Face1} alt="Face1"/>
                <img className="face" src={Face2} alt="Face2"/>
                <img className="face" src={Face3} alt="Face3"/>
                <div className="additional">107+</div>
            </div>
        </div>
    </div>
  );
}

export default Offer;
