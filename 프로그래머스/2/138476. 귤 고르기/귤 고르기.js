function solution(k, tangerine) {
    let result = 0;
    var answer = 0;
    const obj={}
    
    //귤 종류와 갯수 구하기
    tangerine.forEach((t)=>{
        if(obj[t]){
            obj[t] = obj[t] + 1
        }else{
            obj[t] = 1
        }
    })
    
    let cnt = Object.values(obj).sort((a,b)=>(b-a))
    console.log(cnt)
   
    for(let n of cnt){
        result+=n
        answer++
        if(result >= k){
            break;
        }
    }
   return answer;
}


//중복되는 tangerine 요소들만 구함
//k만큼 담아냄
//크기가 다른 종류의 수 최솟값 출력