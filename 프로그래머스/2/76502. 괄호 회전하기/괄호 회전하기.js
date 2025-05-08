function solution(s) {
    var answer = 0;
    let rotated = ''
    for(let i=0; i<s.length; i++){
        rotated = s.slice(i) + s.slice(0,i)
        if(isValid(rotated)) answer++
    }
    
    function isValid(str){
        const stack = []
        for(let c of str){
            if(c === '(' || c === '{' || c === '['){
                stack.push(c)
            }else{
                const last = stack.pop()
                
                if((c === ')' && last !== '(') || 
                   (c === ']' && last !== '[') || 
                   (c === '}'&& last!== '{')){
                    return false
                }
            }
        }
        return stack.length === 0
    }

    
    return answer;
}