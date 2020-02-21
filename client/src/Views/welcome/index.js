import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HeaderBg from '../../svg/welcome-bg.svg'
import WelcomeCTA from '../../svg/welcome-cta.svg'
import PostelloLogo from '../../svg/postello-logo.svg'
import EigenLogo from '../../svg/eigen-logo.svg'

import './welcome.sass';

function WelcomeView() {
  const [isLoading, setIsLoading] = useState(true);
  const [serverRunning, setServerRunning] = useState(false);

  useEffect(() => {
    fetch("http://0.0.0.0:5000/", { method: "GET" })
      .then(res => res.json())
      .then(response => {
        setServerRunning(response.running);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [])

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
        <span>
          {isLoading && <p>Loading server...</p>}
          {serverRunning && "Server Running"}
        </span>
      </div>
    </div>
  );
}

export default WelcomeView;
