function solution(participant, completion) {
   let players = new Map()
   
   for(let p of participant){
       players.set(p, (players.get(p) || 0) + 1)
   }
    
    for(let c of completion){
        players.set(c, (players.get(c) || 0) -1)
    }

    for(let [k, v] of players){
        if(v === 1){
            return k
        }
    }
}