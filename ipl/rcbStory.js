function rcbStory(matches){
    let result={};
    for(let match of matches){
        const season=match.season;
        const winner=match.winner;
    if(winner=="Royal Challengers Bangalore"){
            if(result[season]){
                result[season]+=1;
            } else{
            result[season]=1;
            }
       }

    }
    return result;
}
module.exports =rcbStory;