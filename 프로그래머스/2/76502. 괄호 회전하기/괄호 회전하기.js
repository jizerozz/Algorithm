function solution(s) {
    var answer = 0;

    for(let i=0; i<s.length; i++){
        let str = ''
        str = s.slice(i) + s.slice(0, i)
        rotation(str) && answer++
    }
    
    
    function rotation(str){
        const stack = []
        for(let c of str){
            if(c === '(' || c=== '[' || c === '{'){
                stack.push(c)
            }else{
                  const top = stack.pop()
                if(
                    top !== '(' && c === ')'
                    || top !== '[' && c === ']'
                    || top !== '{' && c === '}')
                {
                return false
                }
            }
        }
        return stack.length === 0
    }
   
    
    return answer;
}

// ([{