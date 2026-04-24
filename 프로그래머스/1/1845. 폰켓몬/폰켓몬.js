function solution(nums) {
    var answer = 0;
    //폰켓몬 종류 수 저장할 객체
    let hasPonketmons = {}
    //N/2 마리
    let ponketMonsNum = nums.length / 2
    
    for(let n of nums){
        hasPonketmons[n] = (hasPonketmons[n] || 0 ) + 1
    }
    
    return Math.min(ponketMonsNum, Object.keys(hasPonketmons).length)
}