function solution(quiz) {
    var answer = [];
    quiz.forEach((q)=>{
        q = q.split(' ')
        if(q[1] === '-'&& Number(q[0]) - Number(q[2]) === Number(q[4]) || 
           q[1] === '+'&& Number(q[0]) + Number(q[2]) === Number(q[4])){
             answer.push('O')
        }else{
            answer.push('X')
        }
    })
    return answer;
}