function solution(emergency) {
    let res={}
    let cnt = emergency.length

    for(let i=0; i<emergency.length; i++){
        res[emergency[i]] = cnt--;
    }
    
    return Object.values(res)
   
}