function solution(a, b) {
    let sum;
    let mul;
    mul=2*a*b;
    sum=String(a)+String(b);
    
    if(sum>mul){
        return Number(sum); 
    }else if(sum<mul){
        return Number(mul);
    }else{
        return Number(sum); 
    }
    
}
console.log(solution(2,91));
console.log(solution(91,2));