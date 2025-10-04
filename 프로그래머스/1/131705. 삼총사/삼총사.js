function solution(number) {
    let answer = 0;
    
    function Combination(arr, start, depth, sum){
        if(depth === 3){
            if(sum === 0){
                answer++
            }
            return
        }
        
        for(let i=start; i<number.length; i++){
            Combination(arr, i+1, depth+1, sum+number[i])
        }
    }
    
    Combination([],0,0,0)
    
    return answer;
}
