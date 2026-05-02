function solution(number) {
    var answer = 0;
    let num=Array.from(number);
    let a=0;
    
    num.forEach((el, idx)=>{
        a+= +el
    })
    answer=a%9
    
    return answer;
}