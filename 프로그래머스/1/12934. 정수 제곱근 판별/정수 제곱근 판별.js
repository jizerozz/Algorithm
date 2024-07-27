function solution(n) {
    var answer = 0;
    if (n >= 0 && Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        answer = Math.pow(Math.sqrt(n)+1, 2)
    }else{
        answer = -1
    }
    return answer;
}