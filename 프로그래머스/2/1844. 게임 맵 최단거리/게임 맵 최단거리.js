function solution(maps) {
    //나의 시작지점
    let start = [0, 0]
    //상대편이 위치한 지점 (내가 도달할 지점)
    let end = [maps.length-1, maps[0].length-1]
    let visited = Array.from(
        {length: maps.length}, ()=>Array(maps[0].length).fill(false)
    )
     
    let queue = []
    
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    
    queue.push([start[1], start[0], 1])
    visited[start[1]][start[0]] = true
    
    while(queue.length){
        const [y, x, dist] = queue.shift()
        
        //도착지
        if(y === end[0] && x === end[1]){
            return dist
        }
        
        for(let i=0; i<4; i++){
            
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            //x나 y의 좌표값이 0보다 작아질 일 x, maps의 길이 보다 길어지면 안됨
            if(nx < 0 || ny < 0 || nx >= maps[0].length || ny>= maps.length){
                continue
            }
            
            //좌표가 0인 부분은 벽이라 지나갈 수 없음
            if(maps[ny][nx] === 0){
                continue
            }
            
            if(visited[ny][nx]){
                continue
            }
            
            visited[ny][nx] = true
            queue.push([ny, nx, dist + 1])
        }
        
    }
        
    
    return -1;
}


//최단거리는 bfs로 접근하는게 효율적임
//map[y][x] === 0 인 경우는 벽이라 못지나감