import React from 'react';
import Fuse from 'fuse.js';

import User from '../../components/user';
import Deadeater from '../../svg/deadeater-logo.svg';

import './fuzzy-search.sass';

function MatchingResults({results, busy}) {
  
  const database = new Fuse(require("../../database/database.json"), {
    keys: ["name"],
    shouldSort: true,
    threshold: 0.6,
    distance: 100,
    minMatchCharLength: 2,
    tokenize: true,
  });
  const data = database.search(results);
  return (
    busy
      ? <div>busy...</div> 
      : results &&
      <div>
        matching results for <code>{results}</code>:
        <ul className="results-list">
          { data.length > 0
            ? data.map((x, i) => <li key={i}><User name={x.name} /></li>)
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