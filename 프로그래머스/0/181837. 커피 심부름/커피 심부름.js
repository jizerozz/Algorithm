function solution(order) {
    let ameri=4500;
    let latte=5000;
    let price=0;
     let answer = 0;
    
    for(let i=0;i<order.length;i++){
        if(order[i].includes('americano')){
            price=ameri;
        }else if(order[i].includes('latte')){
            price=latte;
        }else{
            price=ameri;
        }
        answer+=price; 
    }
    
    
    
    return answer;
}