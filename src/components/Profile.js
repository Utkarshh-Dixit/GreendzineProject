import React from 'react';
import topright from '../topright.png';
import toplogo from '../toplogo.png';
import homepage from '../home-page.png';
import usericon from '../user-icon.png';
import './Profile.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div className="container">
      <img className="topRightImage" src={topright} alt="Top Right" />
      <img className="mainImage" src={toplogo} alt="Main" />
      <div className="headhead">
        <h2 className='head'>Employee Productivity Dashboard</h2></div>
      <span className="paragraph">
       Productivity on Monday
      </span>
        <span className="percentageLabel">4%</span>
        <div className="percentageBar"></div>
      <span className="paragraph">
       Productivity on Tuesday
      </span>
        <span className="percentageLabel">92%</span>
        <div className="percentageBar2"></div>
      <span className="paragraph">
       Productivity on Wednesday
      </span>
        <span className="percentageLabel">122%</span>
        <div className="percentageBar3"></div>
      <span className="paragraph">
       Productivity on Thursday
      </span>
        <span className="percentageLabel">93%</span>
        <div className="percentageBar4"></div>
      <span className="paragraph">
       Productivity on Friday
      </span>
        <span className="percentageLabel">89%</span>
        <div className="percentageBar5"></div>
      <span className="paragraph">
       Productivity on Saturday
      </span>
        <span className="percentageLabel">98%</span>
        <div className="percentageBar6"></div>
      {/* Repeat the above div structure for the remaining 5 sections */}
      <div className="buttonWrapper">
        <Link to="/profile">
        <button className="button"><img className="homeI" src={homepage} alt="Home"/></button>
        </Link>
        <Link to="/users">
        <button className="button"><img className="userI" src={usericon} alt="User"/></button>
        </Link>
      </div>
    </div>
  );
};

