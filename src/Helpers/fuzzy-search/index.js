import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import User from '../../components/user';
import Deadeater from '../../svg/deadeater-logo.svg';

import Busy from '../../components/busy';

import './fuzzy-search.sass';

function MatchingResults({results, busy}) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function getUsers(){
      const res = await fetch("http://0.0.0.0:5000/slackusers", { method: "GET" })
      const response = await res.json();
        setIsLoading(false);
        const database = new Fuse(response, {
          keys: ["name"],
          shouldSort: true,
          threshold: 0.6,
          distance: 50,
          minMatchCharLength: 2,
          tokenize: true,
        });
        const data = database.search(results);
        console.log(data)
        setUsers(data);
    }

    getUsers()
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