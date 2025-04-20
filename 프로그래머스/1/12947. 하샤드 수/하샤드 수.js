function solution(x) {
    var answer = true
    const num = String(x)
    let sum = 0
    num.split('').forEach((item) => {
        sum += Number(item)
    })
    answer = num % sum === 0 ? true : false
    return answer
}