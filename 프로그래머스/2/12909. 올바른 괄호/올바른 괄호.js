function solution(s){
   var answer = false
   let stack = []
   
   for(let c of s){
       if(c === '('){
           stack.push(c)
       }else{
           if(stack.length === 0) return false
           stack.pop()
       }
   }
    return stack.length === 0
}
// )()
//)(