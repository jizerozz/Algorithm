const fcd = (n ,m) => {
    while(m !== 0){
        let res = n % m
        n = m
        m = res
    }
    return n
}

function solution(n, m) {
    var answer = [];
    answer.push(fcd(n,m))
    answer.push(n*m/(fcd(n,m)))
    return answer;
}

