function topEcoBowlers(deliveries){
    let result = {};
    const bowl = [];
    const run = [];
    for(let deliverie of deliveries){
        const bowler = deliverie.bowler;
        const match_id = deliverie.match_id;
        const total_runs = deliverie.total_runs;

        if(parseInt(match_id) > 517 && parseInt(match_id) < 577){
            if(run[bowler]){
                run[bowler] += parseInt(total_runs);
            }else{
                run[bowler] = parseInt(total_runs);
            }

            if(bowl[bowler]){
                bowl[bowler] += 1;
            }else{
                bowl[bowler] = 1;
            }
        }
    }
    for(let b in bowl){
        bowl[b] = parseFloat(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
    }

    for(let r in run){
        run[r] = parseInt(run[r])/bowl[r];
    }


    const test = [];
    for(let rr in run){
        test.push(run[rr])
    }

    test.sort(function(a, b){return a - b}).splice(10,test.length);

    for(let rrr in run){
        if(test.includes(parseFloat(run[rrr]))){
            result[rrr] = run[rrr];
        } 
    }
    return result;
}

module.exports = topEcoBowlers;