function solution(array) {
    var answer = 0;
    array = array.join('').split('')
    answer = array.filter((item)=>item === '7')
    return answer.length > 0 ? answer.length : 0
}