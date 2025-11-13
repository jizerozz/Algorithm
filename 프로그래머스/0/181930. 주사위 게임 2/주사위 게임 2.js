function solution(a, b, c) {
    let answer = 0;
    let sum=a+b+c;
    let zgsum=(a**2+b**2+c**2);
    let threezgsum=(a**3+b**3+c**3);
    if(a!==b&&b!==c&&a!==c){
        answer=sum;
    }else if((a===b&&b!==c)||(b===c&&c!==a||(a===c&&b!==a))){
        answer=sum*zgsum;
    }else if(a===b&&b===c&&a===c){
        answer=sum*zgsum*threezgsum;
    }
    
    
    return answer;
}