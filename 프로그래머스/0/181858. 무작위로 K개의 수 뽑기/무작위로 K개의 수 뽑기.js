function solution(arr, k) {
    var answer = [];
    
    let soonseo=arr.filter((el,index)=>arr.indexOf(el)===index);
    answer=soonseo.slice(0,k);
    
    while(answer.length<k){
        answer.splice(k+1,0,-1);
    }
    
    
    return answer;
}