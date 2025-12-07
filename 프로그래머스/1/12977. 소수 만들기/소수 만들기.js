function solution(nums) {
    var answer = 0;
    
       nums.forEach((num, idx) => {
           nums.slice(idx + 1).forEach((n, i) =>{
               const rest = nums.slice(idx + i + 2)
                rest.forEach((r) => {
                    const sum = num + n + r
                    
                    //더한 수가 소수인지 판별
                    if(isPrime(sum)){
                        answer++
                    }
                });
           })
           
       })
    return answer;
}
                    
function isPrime(n){
    if(n < 2) return false
    for(let i=2; i*i <= n; i++){
        if(n % i === 0) return false
    }
    return true     
}