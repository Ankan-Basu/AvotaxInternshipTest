function minimumWaitingTime(queries) {
  queries.sort((a,b) => {
    return a-b;
  });

  let waitingTime = 0;

  for(let i=0; i<queries.length; i++) {
    let currDuration = queries[i];
    let queriesLeft = queries.length - (i + 1);
    
    /** The execution time of a query will
     * appear as waiting time for all the
     * queries after this query.
     */
    waitingTime += currDuration * queriesLeft;
  }
  return waitingTime;
}

exports.minimumWaitingTime = minimumWaitingTime;