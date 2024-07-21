function solution(n) {
    var answer = 0;
    let f=[0,1]
    
    for(let i = 2; i <= n; i++){
        f[i] = (f[i-1] + f[i-2]) % 1234567
        answer=f[i]
    }
    
    return answer;
}