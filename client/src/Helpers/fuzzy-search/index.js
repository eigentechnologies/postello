import React, { useEffect, useState } from 'react';

import User from '../../components/user';
import Deadeater from '../../svg/deadeater-logo.svg';

import Busy from '../../components/busy';

import './fuzzy-search.sass';

function MatchingResults({results, busy}) {
  // const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers(){
      const res = await fetch(`http://0.0.0.0:5000/slackusers`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(results)
      })
      const response = await res.json();
      setUsers(response);
    }
    
    results && getUsers()
  }, [results])
  
  return (
    busy
      ? <Busy />
      : results &&
      <div>
        {/* matching results for <code>{results}</code>: */}
        <span className="title">Send notification to:</span>
        <ul className="results-list">
          { users.length > 0
            ? users.map(x => <li key={x.id}><User name={x.name} photo={x.img} id={x.id} /></li>)
            : <NoResults />
          }
        </ul>
      </div>
  );
}

export default MatchingResults;

function NoResults() {
  return(
  <div className="no-results">
    <div style={{backgroundImage:`url(${Deadeater})`}} className="dead-eater" />
    <span>
      No results
    </span>

  </div>)
}