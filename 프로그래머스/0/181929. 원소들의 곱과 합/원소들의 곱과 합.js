function solution(num_list) {
    var answer = 0;
    let mul=1;
    let sum=0;
    num_list.forEach((el, idx)=>{
        mul=mul*el;
        sum=sum+el;
        
        if(mul<sum**2){
            answer=1;
        }else{
            answer=0;
        }
    })
    return answer;
}