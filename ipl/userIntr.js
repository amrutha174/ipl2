function userIntr(matches)
{
    let result = {}
    for(let match=0; match<matches.length; match++)
    {
        const season = matches[match].season
        const winner = matches[match].winner
        if (result[season]) 
        {
            if(result[season][winner])
            {
                result[season][winner]+=1
            }
            else
            {
                result[season][winner]=1
            }
        } 
        else 
        {
            result[season] = {}
            result[season][winner]=1
        }
    }
    return result;
}

module.exports= userIntr;