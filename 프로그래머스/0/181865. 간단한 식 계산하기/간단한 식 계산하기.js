function solution(binomial) {
    
    const [a,op,b]=binomial.split(' ');
    if(op=='+'){
        return Number(a)+Number(b);
    }else if(op=='-'){
        return Number(a)-Number(b);
    }else if(op=='*'){
        return Number(a)*Number(b);
    } 
}
console.log(solution("43 + 12",55))