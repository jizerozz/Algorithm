function solution(participant, completion) {
    let names = new Map()
    
    for(let name of participant){
        names = names.set(name, (names.get(name) | 0) + 1)
    }
    
    for(let name of completion){
        names = names.set(name, (names.get(name) | 0) - 1)
    }
    
    
    for(let [name, cnt] of names){
        if(cnt > 0) return name
    }

}