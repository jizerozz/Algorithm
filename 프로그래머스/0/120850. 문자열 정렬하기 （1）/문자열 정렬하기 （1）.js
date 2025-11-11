function solution(my_string) {
    var answer = [];
    answer = my_string.match(/\d/g).map(Number).sort((a,b) => a-b)
    return answer;
}