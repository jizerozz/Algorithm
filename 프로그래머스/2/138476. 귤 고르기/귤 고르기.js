function solution(k, tangerine) {
    let result = 0;
    var answer = 0;
    const obj={}
    
    tangerine.forEach((t)=>{
        if(obj[t]){
            obj[t] = obj[t] + 1
        }else{
            obj[t] = 1
        }
    })
    
    let cnt = Object.values(obj).sort((a,b)=>(b-a))
   
    for(let n of cnt){
        result+=n
        answer++
        if(result >= k){
            break;
        }
    }
   return answer;
}

