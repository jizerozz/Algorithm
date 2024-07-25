function solution(my_string) {
    var answer = 0;
    my_string.match(/[1-9]/g).forEach((el) => answer+=Number(el))
    return answer;
}