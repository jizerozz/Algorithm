function solution(array) {
    let freq = {}
    
    for(let a of array){
        freq[a] = (freq[a] || 0) + 1
    }
    
    const entries = Object.entries(freq) 
    entries.sort((a, b) => b[1] - a[1])
    
    
    return entries.length > 1 && entries[0][1] === entries[1][1] ? -1 : Number(entries[0][0])

}