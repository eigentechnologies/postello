import React from 'react';

import Envelope from '../../svg/envelope.svg'

import './user.sass';

function User({name, photo, id}) {
  // const url=`https://api.adorable.io/avatars/32/${Math.floor(Math.random()*100)}.png`

  async function sendMessage(id) {
    console.log(`sending message to...${id}`)
    // const res = await fetch(`http://0.0.0.0:5000/slack/${id}`, {method: "GET"})
  }

  return(
    <div className="user-list-item">
      <span className="user-name">
        <div className="user-photo">
          <img className="img" src={photo} alt="user profile" />
          {/* <img className="img" src={photo} /> */}
        </div>
        <span>{name}</span>
      </span>
      <div style={{backgroundImage:`url(${Envelope})`}} className="envelope" onClick={() => sendMessage(id)} />
    </div>
  )
}

export default User;