import React from 'react';

import Base from './svg_base.js';
import Shadow from './svg_shadow';
import Pack from './svg_pack';

import './welcome_pack.sass';

const SvgWelcomePack = () => (
  <div className="welcome-pack">
    <Shadow />
    <Base />
    <Pack />
  </div>
);

export default SvgWelcomePack;
