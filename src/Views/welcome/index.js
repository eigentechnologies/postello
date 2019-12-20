import React from "react";

import { Link } from "react-router-dom";

function WelcomeView() {
  return (
    <div>
      POSTELLO says HELLO
      <span role="img" aria-label="wave">
        👋
      </span>
      <Link to="/camera">go to camera</Link>
    </div>
  );
}

export default WelcomeView;
