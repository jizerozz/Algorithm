function solution(sequence, k) {
    var answer = [];
    
    let minLen = Infinity
    let left = 0
    let sum = 0
    
    for(let right = 0; right<sequence.length; right++){
        
        sum += sequence[right]
        
        while(sum > k){
            sum -= sequence[left]
            left++
        }
        
        if(sum === k){
           
            let len = right - left
            
            if(len < minLen){
                minLen = len
                answer = [left, right]
            }
        }
    }
   
    
    return answer;
}