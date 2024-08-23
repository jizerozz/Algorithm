function solution(array, height) {
    var answer = 0;
    let count = 0
    array.forEach((el) => {
        return Number(el) > height ? ++answer : answer
    })
    return answer;
}