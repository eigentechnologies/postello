import React, { useEffect, useState } from 'react';

function UsersView() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://0.0.0.0:5000/users", { method: "GET" })
      .then(res => res.json())
      .then(response => {
        setIsLoading(false)
        setUsers(response);
      })
      .catch(error => console.log(error));
  }, [])

  return(
    <div>
      {
        isLoading
        ? 'loading users...'
        : (<ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}, <i>{user.email}</i></li>
        ))}
      </ul>)}
    </div>
  )
}

export default UsersView

