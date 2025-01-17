import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import CameraView from "./Views/camera";
import WelcomeView from "./Views/welcome";
import UsersView from "./Views/users";


import "./styles.sass";

function App() {
  return (
    <Router className="App">
      <Route exact path="/">
        <WelcomeView />
      </Route>
      <Route path="/camera" component={CameraView} />
      <Route path="/users" component={UsersView} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
