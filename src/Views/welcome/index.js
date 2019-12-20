import React from "react";
import { Link } from "react-router-dom";

import HeaderBg from '../../svg/welcome-bg.svg'
import WelcomeCTA from '../../svg/welcome-cta.svg'
import PostelloLogo from '../../svg/postello-logo.svg'
import EigenLogo from '../../svg/eigen-logo.svg'

import './welcome.sass';

function WelcomeView() {
  return (
    <div className="main">
      <div style={{backgroundImage:`url(${HeaderBg})`}} className="header-bg" />
      <div className="welcome-header">
        <div style={{backgroundImage:`url(${PostelloLogo})`}} className="header-logo" />
      </div>
      <div className="welcome-body">
        <div className="quote">Take a picture and send an Owl!</div>
        <Link to="/camera" className="welcome-link" style={{backgroundImage:`url(${WelcomeCTA})`}}/>
      </div>
      <div className="welcome-footer">
        <span>Powered by</span>
        <div style={{backgroundImage:`url(${EigenLogo})`}} className="eigen-logo" />
      </div>
    </div>
  );
}

export default WelcomeView;
