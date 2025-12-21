function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((el, idx) =>{
        absolutes[idx] = el === true ? absolutes[idx] : -absolutes[idx]
        answer += Number(absolutes[idx])
    })
    return answer;
}