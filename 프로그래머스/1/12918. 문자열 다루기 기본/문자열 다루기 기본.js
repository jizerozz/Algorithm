function solution(s) {
    let answer = true
    
    if(s.length !== 4 && s.length !== 6){
        answer = false
    }else if(/[^0-9]/.test(s)){
        answer = false
    }
        return answer;
}