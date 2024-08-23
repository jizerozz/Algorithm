function solution(n, k) {
    var answer = [];
    
    for (let i = 1; i <= n; i++) {
        let res = k * i;
        if (res <= n) {
            answer.push(res);
        } 
    }
    
    return answer;
}

console.log(solution(10,3))