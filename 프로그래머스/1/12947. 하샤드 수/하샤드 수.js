function solution(x) {
    var answer = true;
    let sum = 0
    
    String(x).split('').forEach((n) => {
        sum += Number(n)
    })
    
    answer = x % sum === 0 ?  true :  false
    
    
    return answer;
}