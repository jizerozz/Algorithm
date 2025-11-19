function solution(my_string, letter) {
    var answer = '';
    
    answer=Array.from(my_string).filter((el)=>(el!==letter))
    
    return answer.join('');
}

