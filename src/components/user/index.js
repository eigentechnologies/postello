import React from 'react';

import './user.sass';

function User({name}) {
  return(
    <div className="user-list-item">
      <span className="user-name">
        <img className="user-photo" src={`https://i.pravatar.cc/32?img=${Math.floor(Math.random()*100)}`} />
        {name}
      </span>
      <span className="user-action" aria-label="envelope" role="img">
        💬
      </span>
    </div>
  )
}

export default User;