import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './button.sass';

const Button = ({ linkTo, label }) => (
  <Link to={linkTo} className="button">
    <span>{label}</span>
  </Link>
);

Button.propTypes = {
  linkTo: PropTypes.func.isRequired
};


export default Button;