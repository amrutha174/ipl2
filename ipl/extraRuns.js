function extraRuns(deliveries) {
    const result = {};
    for (let d of deliveries) {
      const match_id = d.match_id;
      const bowling_team = d.bowling_team;
      const extra_runs = d.extra_runs;

      if(parseInt(match_id)>576 && parseInt(match_id)< 637){
        if(result[bowling_team]){
          result[bowling_team]+=parseInt(extra_runs);
        }
        else {
          result[bowling_team]=parseInt(extra_runs);
        }
      }
  }
  return result;
}
  
module.exports=extraRuns