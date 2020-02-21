import React from 'react';

import Envelope from '../../svg/envelope.svg'

import './user.sass';

function User({name, photo, id}) {
  async function sendMessage(id) {
    console.log(`sending message to...${id}`)
    await fetch(`http://0.0.0.0:5000/slack/${id}`, {method: "POST"})
  }

  return(
    <div className="user-list-item">
      <span className="user-name">
        <div className="user-photo">
          <img className="img" src={photo} alt="user profile" />
        </div>
        <span>{name}</span>
      </span>
      <div style={{backgroundImage:`url(${Envelope})`}} className="envelope" onClick={() => sendMessage(id)} />
    </div>
  )
}

export default User;