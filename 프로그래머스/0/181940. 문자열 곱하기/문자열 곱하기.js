function solution(my_string, k) {
    var answer = '';
   
    answer=Array(k).fill(my_string).join('');
    
    return answer;
}