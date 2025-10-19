function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let stack = []
    
    for(let i=0; i<numbers.length; i++){
       while(stack.length && numbers[stack[stack.length - 1]] < numbers[i]){
           const idx = stack.pop()
           answer[idx] = numbers[i]
       }
        stack.push(i)
    }
    
    return answer;
}




//...find랑 slice 매번 해줘서 시간복잡도 이슈로 실패함

//     for(let i=0; i<numbers.length; i++){
//         let firstNum = 0;
        
//         firstNum = numbers[i]
//         answer.push(findBigNum(firstNum, numbers, i))
//     }
    
//     return answer;
// }

// function findBigNum(num, numbers, idx){
//     let findNum = 0
    
//     findNum = numbers.slice(idx).find((n) => n > num)
    
//     return findNum ? findNum : -1
// }