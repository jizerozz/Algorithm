function solution(N, stages) {
    var answer = [];
    const cnt= {}
    //stages = stages.sort((a,b)=>a-b)
    for(let stage of stages){
        if(stage<=N){
            cnt[stage] = (cnt[stage] || 0) + 1
        }
    }
    console.log(cnt)
    
    let users = stages.length
    
    for(let i=1; i<=N; i++){
        const failMembers = cnt[i] || 0
        const failRate = users === 0 ? 0 : failMembers/users
        answer.push({stage: i, rate: failRate})
        users-=failMembers
    }
    
    answer.sort((a,b)=>b.rate-a.rate)
    return answer.map(item => item.stage)
    
}