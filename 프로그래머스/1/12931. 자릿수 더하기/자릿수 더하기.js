function solution(n)
{
    var answer = 0;
    let a=n+"";
    const num=[...a];
    for(let n of num){
        answer+=Number(n);
    }

    return answer;
}