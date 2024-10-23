function solution(X, Y) {
    var answer = '';
    const Xfreq = Array(10).fill(0)
    const Yfreq = Array(10).fill(0)
    
    for(let i=0;i<X.length;i++){
        Xfreq[X[i]]++ 
    }
    
    for(let j=0; j<Y.length; j++){
        Yfreq[Y[j]]++
    }
    
    for(let i=9; i>=0; i--){
        let cnt = Math.min(Xfreq[i], Yfreq[i])
        if(cnt > 0){
           answer += i.toString().repeat(cnt)
        }
    }
    
    if(answer.length === 0){
        return '-1'
    } 
    if(parseInt(answer) === 0){
       return '0'
    }
    
    
    return answer;
}

