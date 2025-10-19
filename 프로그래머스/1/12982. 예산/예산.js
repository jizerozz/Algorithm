function solution(d, budget) {
    let count = 0;
    
    d.sort((a,b) => a - b)
    
    for(let obj of d){
        if(budget - obj < 0) break
            budget -= obj
            count++
    }
    
    return count;
}