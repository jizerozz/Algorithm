function solution(n) {
    var answer = 0;
    let isPrime = new Array(n+1).fill(true)
    
    isPrime[0] = false
    isPrime[1] = false
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
             for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
        
    }
    
    return isPrime.filter((item)=>item).length
}

// function isPrime(num){
//     for(let i=2; i<=Math.sqrt(num); i++){
//        if(num%i===0) return false
//     }
//     return true
// }