function solution(n, lost, reserve) {
    
    const filteredReserve = reserve.sort().filter(r => !lost.includes(r));
    const filteredLost = lost.sort().filter(l => !reserve.includes(l));
    
    let hasclothes = n - filteredLost.length
    
    for(let i=0; i<filteredLost.length; i++){
        for(let j=0; j<filteredReserve.length; j++){
            if(filteredLost[i]-1 === filteredReserve[j] || 
               filteredLost[i]+1 === filteredReserve[j]){
                hasclothes++
                filteredReserve[j]=-1
                break
            }
        }
    }

    return hasclothes;
}


//대체.. 도둑이 들었는데 체육복을 왜 훔쳐가냐..
