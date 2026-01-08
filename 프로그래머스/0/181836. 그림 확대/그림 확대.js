function solution(picture, k) {
    let answer = [];
    for(let row of picture ){
        let newR='';
           for(let char of row){
            newR=newR+char.repeat(k);
            }
            for(let j=0;j<k;j++){
            answer.push(newR);
            }
        }
    return answer;
}

console.log(solution(["x.x", ".x.", "x.x"],3))
console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."],2))