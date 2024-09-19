function solution(t, p) {
    var answer = 0;
    Array.from(t).forEach((_, idx)=>{
        const sliceword = Array.from(t).splice(idx, p.length)
        const sliceNum = Number(sliceword.join(''))
        
        if(sliceword.length === p.length){
            answer = sliceNum <= Number(p) ? answer+1 : answer
        }
    })
    return answer;
}