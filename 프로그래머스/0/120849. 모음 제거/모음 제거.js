function solution(my_string) {
    var answer = '';
    answer = my_string.match(/[^aeiou]/g) ? my_string.match(/[^aeiou]/g).join('') : ''
    return answer;
}