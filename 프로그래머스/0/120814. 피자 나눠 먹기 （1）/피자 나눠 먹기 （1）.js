function solution(n) {
    var answer = 0;
    answer = n % 7 !== 0 ? (n/7)+1 : n / 7
    return Math.floor(answer);
}