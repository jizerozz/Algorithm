function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((item)=>{
        if(item.slice(s,s+l) > k){
            answer.push(Number(item.slice(s,s+l)))
        }
    })
    return answer;
}