function solution(score) {
    var answer = [];
    let avg = score.map((el, idx) => {
        const [eng, math] = el
        return Number(eng + math) / 2
    })
    let sortAvg = [...avg].sort((a,b) => b-a)
    answer = avg.map((el) => sortAvg.indexOf(el) + 1)
    
    
    return answer;
}