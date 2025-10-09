function solution(a, b) {
    var answer = 0;
    
    let sum=String(a)+String(b);
    let sum1=String(b)+String(a);
    
    answer=sum1>sum ? Number(sum1) : Number(sum);
    
    
    return answer;
}