function solution(answers) {
    const testSystem = {
        1 : [1,2,3,4,5],
        2 : [2,1,2,3,2,4,2,5],
        3 : [3,3,1,1,2,2,4,4,5,5]
    }
    
    let maxScore = 0
    var answer = [];
    let guessed = {};
    
    for(const [key, value] of Object.entries(testSystem)){
        let cnt = 0
        answers.forEach((v, idx) => {
            if(v === value[idx % value.length]){
                cnt++
            }
        })
        guessed[key] = cnt
    }
    
    maxScore = Math.max(...Object.values(guessed))
                        
    answer = Object.entries(guessed).filter(([_, score]) => score === maxScore)
                .map(([key])=>Number(key))
    
    return answer;
}