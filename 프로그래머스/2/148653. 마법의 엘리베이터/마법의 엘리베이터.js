function solution(storey) {
    var answer = 0;
    
    while(storey !== 0){
        let n =  Math.floor(storey) % 10
        storey = Math.floor(storey / 10)
        
        if(n === 0){
            continue
        }
        else if(n < 5){
            answer += n
        }else if(n > 5){
            answer += 10 - n
            storey++
        }else{
            answer += 5
            if(storey % 10 >= 5){
                storey++
            }
        }
    }
    
    return Math.floor(answer);
}