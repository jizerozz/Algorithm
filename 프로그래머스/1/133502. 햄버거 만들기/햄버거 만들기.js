function solution(ingredient) {
    var answer = 0;
    const stack = []
    
    for(let i of ingredient){
        stack.push(i)
        if(stack.length>=4 && stack.slice(-4).toString() === '1,2,3,1'){
            stack.splice(-4)
            answer++
        }
    }
    console.log(stack)
    
    return answer;
}