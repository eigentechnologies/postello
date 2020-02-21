import React from "react";
import { Link } from "react-router-dom";

import SvgWelcomeBackground from "../../components/animated_svgs/svg_welcome_background";
import WelcomeCTA from '../../svg/welcome-cta.svg'
import PostelloLogo from '../../svg/postello-logo.svg'
import EigenLogo from '../../svg/eigen-logo.svg'

import './welcome.sass';

function WelcomeView() {
  return (
    <div className="main">
      <SvgWelcomeBackground />
      <div className="welcome-header">
        <div style={{backgroundImage:`url(${PostelloLogo})`}} className="header-logo" />
      </div>
      <div className="welcome-body">
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
