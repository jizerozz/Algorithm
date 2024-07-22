function solution(numbers) {
    var answer = 0;
    let sum = 0
    numbers.forEach((el) => {
        sum += el
        answer = sum/numbers.length
    })
    return answer;
}