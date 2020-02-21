import React from 'react';

import './busy.sass';
import wait from '../../svg/waiting.svg';

function Busy() {
  return(
    <div className="busy-sign">
      <div className="busy-img" style={{backgroundImage: `url(${wait})`}}/>
    </div>
  )
}

export default Busy;