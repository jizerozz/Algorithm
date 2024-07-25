function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((el, idx) => el % n === 0)
    return answer;
}