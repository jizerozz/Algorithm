function solution(n, t) {
    var answer = 0;
    for(let i=1;i<=t;i++){
        answer = n *= 2;
    }
    return answer;
}