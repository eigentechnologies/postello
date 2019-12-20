import React from 'react';

import Envelope from '../../svg/envelope.svg'

import './user.sass';

function User({name, photo}) {
  return(
    <div className="user-list-item">
      <span className="user-name">
        <div className="user-photo">
          {/* <img className="img" src={`https://i.pravatar.cc/32?img=${Math.floor(Math.random()*100)}`} /> */}
          <img className="img" src={photo} />
        </div>
        <span>{name}</span>
      </span>
      <div style={{backgroundImage:`url(${Envelope})`}} className="envelope" />
    </div>
  )
}

export default User;