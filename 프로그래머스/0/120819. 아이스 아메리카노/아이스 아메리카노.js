function solution(money) {
    var answer = [];
    let max=money / 5500
    let change=money % 5500
    
    answer.push(Math.floor(max),change)
    return answer
}