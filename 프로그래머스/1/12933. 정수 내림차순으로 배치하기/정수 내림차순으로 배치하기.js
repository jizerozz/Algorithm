function solution(n) {
    var answer = [];
    let num=String(n).split('');
    for(let i of num){
        i=parseInt(i);
        answer.push(i);
    }
    return parseInt(answer.sort().reverse().join(''));
    
}