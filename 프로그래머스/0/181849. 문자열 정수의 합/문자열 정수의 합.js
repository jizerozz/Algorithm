function solution(num_str) {
    var answer = 0
    const arr = Array.from(num_str)
    arr.forEach((n) => {
        answer+=Number(n)
    })
    return answer
}