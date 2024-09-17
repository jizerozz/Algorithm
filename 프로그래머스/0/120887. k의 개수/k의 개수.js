function solution(i, j, k) {
    var answer = 0;
    const num = []
    for(let a=i; i<=j; i++){
        num.push(i)
    }
    num.forEach((n)=>{
        answer += String(n).split(String(k)).length - 1
    })
    return answer;
}