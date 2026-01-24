function solution(rank, attendance) {
    var answer = 0;
    
    let okStd=[];
    for(let i=0;i<rank.length;i++){
        if(attendance[i]===true){
            okStd.push({rank: rank[i], index:i});
        }    
    }
    
   okStd.sort((a,b)=>a.rank-b.rank);
   let[a,b,c]=[okStd[0].index, okStd[1].index, okStd[2].index]; 
   
    answer=10000*a+100*b+c;
    
    
    return answer;
}

console.log(solution([3, 7, 2, 5, 4, 6, 1],[false, true, true, true, true, false, false]))
console.log(solution([1, 2, 3],[true, true, true]))
console.log(solution([6, 1, 5, 2, 3, 4],[true, false, true, false, false, true]))
