function solution(n, k) {
    var answer = 0;
    const sheep=12000;
    const drink=2000;
    
    if(n>=10){
    answer=Number(n*sheep)+Number(k*drink)-parseInt(n/10)*drink;
    }else{
    answer=Number(n*sheep)+Number(k*drink)
    }
    
    return answer;
}