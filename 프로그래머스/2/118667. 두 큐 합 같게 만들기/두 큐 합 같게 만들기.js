function solution(queue1, queue2) {
    let answer = 0;

    let sum1 = queue1.reduce((a,b) => a+b,0)
    let sum2 = queue2.reduce((a,b) => a+b,0)
    const target = (sum1 + sum2) / 2
 
    if((sum1+sum2) % 2 !== 0) return -1
    
    let q1 = [...queue1]
    let q2 = [...queue2]
    let maxCount = (queue1.length + queue2.length) * 3
    
    let i = 0
    let j = 0
    while(answer <= maxCount){
        if(sum1 === target) return answer
        
        if(sum1 > target){
            let x = q1[i++]
            sum1 -= x
            sum2 += x
            q2.push(x)
        }else{
            let x = q2[j++]
            sum2 -= x
            sum1 += x
            q1.push(x)
        }
        answer++
    }
    return -1
}


