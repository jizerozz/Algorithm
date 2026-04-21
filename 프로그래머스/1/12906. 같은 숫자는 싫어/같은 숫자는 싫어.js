function solution(arr)
{
    let answer = []
     for(let w of arr){
         if(answer[answer.length - 1] !== w ){
             answer.push(w)
         }
     }
    return answer
}