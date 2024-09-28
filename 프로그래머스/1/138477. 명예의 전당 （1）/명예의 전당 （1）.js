function solution(k, score) {
    var answer = [];
    let grade = []
    score.forEach((item)=>{
        if(grade.length<k){
            grade.push(item)
        }else{
            grade.push(item)
            grade.sort((a,b)=>b-a)
            grade.pop()
        }
        answer.push(Math.min(...grade))
    })
    return answer;
}

