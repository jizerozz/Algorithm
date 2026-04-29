function solution(begin, target, words) {
    var answer = 0;
    let count = 0
    let visited = Array(words.length + 1).fill(false)
    
    function dfs(word, index, count){
        if(word === target){
            answer = count
            return
        }
        
        visited[index] = true
        
        for(let w = 0; w<words.length; w++){
            let diff = 0
            
            for(let i = 0; i<word.length; i++){
                if(word[i] !== words[w][i]){
                    diff++
            }
                
        }
             
            if(diff === 1){
                if(!visited[w]){
                    dfs(words[w], w, count+1)
                }
            }
         }
    }
    
    
    dfs(begin, -1, count)
 
    
    return answer;
}