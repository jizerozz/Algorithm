function solution(a, b, n) {
    var answer = 0;
    let exchanges = 0
    let newBottle = 0
    
    while(n>=a){
            exchanges = Math.floor(n / a)
            newBottle = exchanges * b
            answer += newBottle
            
            n = (n % a) + newBottle
        }
    return answer;
}
