function solution(food) {
    var answer = [];
    let eat='';
    
    for(let i = 0; i < food.length; i++){
            let possible = Math.floor(food[i] / 2);
            eat=String(i).repeat(possible);
            answer.push(eat);
    }
    return answer.join('')+'0'+answer.reverse().join('');
}
 

