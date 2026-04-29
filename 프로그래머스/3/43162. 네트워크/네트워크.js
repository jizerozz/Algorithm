function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(false)
    
    function dfs(node){
        visited[node] = true
        
        for(let i=0; i<computers.length; i++){
            if(computers[node][i] === 1){
                if(!visited[i]){
                    dfs(i)
                }
            }
        }
    }
    
    for(let i=0; i<n; i++){
        //새로운 네트워크 발견
        if(!visited[i]){
            dfs(i)
            answer++
        }
    }
    
    
    
    return answer;
}

110
110
001