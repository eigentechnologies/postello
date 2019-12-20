import React from 'react';
import Fuse from 'fuse.js';

function MatchingResults({results}) {
  const database = new Fuse(require("./database.json"), {
    keys: ["name"],
    shouldSort: true,
    threshold: 0.6,
    distance: 100,
    minMatchCharLength: 2,
    tokenize: true,
  });
  const data = database.search(results);
  return (
    <div>
      matching results for <code>{results}</code>:
      <ul>
        { data.length > 0
          ? data.map((x, i) => <li key={i}>{x.name}</li>)
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
    <span role="img" aria-label="skeleton">
    💀
    </span>
    <span>
      No results
    </span>

  </div>)
}