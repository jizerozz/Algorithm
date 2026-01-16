function solution(numbers) {
    var answer = '';
    answer = numbers.map(String).sort((a,b) => (b+a) - (a+b))
    return answer[0] === "0" ? "0" : answer.join("")
}