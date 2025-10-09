function solution(nums) {
    var answer = 0;
    
    let get=nums.length/2; 
    // 폰켓몬 종류 중복 제거
    let ponketmon=nums.filter((num, idx)=>{ 
        return nums.indexOf(num)===idx
    });
    
    
    //선택할 수 있는 폰켓몬 종류 개수의 최댓값
    answer = ponketmon.length <= get ? ponketmon.length : get
    
    return answer;
}