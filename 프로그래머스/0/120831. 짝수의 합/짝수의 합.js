function solution(n) {
    var answer = 0;
    for(let i=1; i<=n; i++){
         answer = i%2 === 0 ? answer+i : answer
    }
    return answer;
}