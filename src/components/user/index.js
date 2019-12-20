import React from 'react';

import Envelope from '../../svg/envelope.svg'

import './user.sass';

function User({name, photo}) {
  const url=`https://api.adorable.io/avatars/32/${Math.floor(Math.random()*100)}.png`
  return(
    <div className="user-list-item">
      <span className="user-name">
        <div className="user-photo">
          <img className="img" src={url} />
          {/* <img className="img" src={photo} /> */}
        </div>
        <span>{name}</span>
      </span>
      <div style={{backgroundImage:`url(${Envelope})`}} className="envelope" />
    </div>
  )
}

export default User;