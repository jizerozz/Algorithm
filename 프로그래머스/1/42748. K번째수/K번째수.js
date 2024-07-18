function solution(array, commands) {
    var answer = [];
    answer = commands.map((el, idx)=>
        array.slice(el[0]-1, el[1]).sort((a,b)=>a-b).at(el[2]-1)
    )
    return answer;
}