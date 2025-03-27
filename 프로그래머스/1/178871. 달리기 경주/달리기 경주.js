function solution(players, callings) {
    var answer = [];
    let playersPosition = {}
    players.forEach((player, idx) => {
        playersPosition[player] = idx
    })

    callings.forEach((caller) => {
        let idx = playersPosition[caller]
        
        if(idx > 0){
            let prevPlayer = players[idx - 1]
            
            let temp = players[idx -1]
            players[idx - 1] = players[idx]
            players[idx] = temp
            
            playersPosition[caller]--
            playersPosition[prevPlayer]++
        }
    })
    
    return players
}