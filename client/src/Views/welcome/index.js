import React, { useState, useEffect } from "react";

//TODO: we have to create the shortcut for the component folder
import SvgWelcomeBackground from '../../components/animated_svg/welcome_background';
import SvgWelcomePack from '../../components/animated_svg/welcome_pack';
import Button from '../../components/button';

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
      <SvgWelcomeBackground />
      <div style={{backgroundImage:`url(${PostelloLogo})`}} className="postello-logo" />

      <div>
        <SvgWelcomePack />
        {/* <Button linkTo="/camera" label="Press to continue" /> */}
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
