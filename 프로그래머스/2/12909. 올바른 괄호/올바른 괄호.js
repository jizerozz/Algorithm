function solution(s){
    var answer = true;
    let sum = 0
    
    for(let c of s){
        c === '(' ? sum++ : sum--
        
        if(sum < 0){
            answer = false
        }
    }
    
    if(sum !== 0) answer = false
    
    return answer;
}