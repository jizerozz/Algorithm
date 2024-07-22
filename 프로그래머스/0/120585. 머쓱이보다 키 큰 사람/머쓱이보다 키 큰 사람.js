function solution(array, height) {
    var answer = 0;
    let count = 0
    array.forEach((el) => {
        answer = Number(el) > height ? ++count : count
    })
    return answer;
}