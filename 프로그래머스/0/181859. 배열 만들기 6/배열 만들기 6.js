function solution(arr) {
    var answer = [];
    
    for(let i=0; i<arr.length; i++){
        if(answer.at(-1) === arr[i]){
            answer.pop()
        }else{
            answer.push(arr[i])
        }
    }
    answer.length === 0 && answer.push(-1) 

    return answer
}