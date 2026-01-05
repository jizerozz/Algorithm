function solution(common) {
    var answer = 0;
    
    let diffrence = 0
    let ratio = 0
    
    diffrence = common[1] - common[0]
    ratio = common[1] / common[0]
    
    if(diffrence === common[2] - common[1]){
        answer = common.at(-1) + diffrence
    }else{
        answer = common.at(-1) * ratio
    }
    
    return answer;
}