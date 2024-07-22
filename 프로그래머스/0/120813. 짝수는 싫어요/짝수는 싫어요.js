function solution(n) {
    var answer = [];
    let a=0;
    while(n>a){
        a++;
        if(a % 2 === 1){
            answer.push(a);
        }
    }
    return answer;
}