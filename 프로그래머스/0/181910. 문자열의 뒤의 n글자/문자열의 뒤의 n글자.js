function solution(my_string, n) {
    var answer = '';
    let words=[];
    words=my_string.split('');
    return words.splice(my_string.length-n).join('');
}