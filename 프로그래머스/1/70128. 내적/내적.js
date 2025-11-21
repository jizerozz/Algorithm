function solution(a, b) {
    var answer = 0
    let mul = 0
    a.forEach((el, idx) => {
        mul = el * b[idx]
        answer += mul
    })
    return answer;
}