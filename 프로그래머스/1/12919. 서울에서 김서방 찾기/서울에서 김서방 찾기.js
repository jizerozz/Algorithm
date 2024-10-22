function solution(seoul) {
     var answer = '';
    seoul.forEach((el, idx)=>{
        if(el === 'Kim'){
            answer = '김서방은 '+idx+'에 있다'
        }
    })
    return answer;
}