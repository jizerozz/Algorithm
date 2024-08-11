function solution(n, arr1, arr2) {
    var answer = []
    
    answer = arr1.map((item, idx)=>{
       const num = item | arr2[idx]
       return num.toString(2).padStart(n,'0').replaceAll(1,'#').replaceAll(0,' ')    
    })
    
    return answer;
}

//arr1이랑 arr2 or 쓰면 될 것 같음