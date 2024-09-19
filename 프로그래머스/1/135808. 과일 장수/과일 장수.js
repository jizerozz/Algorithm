function solution(k, m, score) {
    var answer = 0;
    const scoreItem = Array(k).fill(0)
    score.forEach((item, idx)=>{
        scoreItem[item-1]++
    })
    
    let remainApple = 0
    
    for(let i=k-1; i>=0; i--){
        let cnt = scoreItem[i] + remainApple
        let box = Math.floor(cnt / m)
        remainApple = cnt % m
        
        answer += box * (i+1) * m
    }
    
    
    return answer;
}

/*
//시간초과로 내쫓김당함..
score.sort((a,b)=>b-a)
    
while(score.length >= m){
    let scoreApples = score.splice(0,m)
    let minScore = Math.min(...scoreApples)
    answer += minScore * m
}
*/

