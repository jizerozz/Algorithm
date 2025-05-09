function solution(n, words) {
    var answer = [];
    let stopped = false
    let triedWord = []
    
    words.forEach((word, idx) => {
        if(stopped) return
        let prev = words[idx - 1]
        
        if(triedWord.includes(word) || idx > 0 && prev.slice(-1) !== word[0]){
                answer = [(idx % n) + 1, Math.floor(idx / n) + 1]
                stopped = true
        }else{
            triedWord.push(word)
        }
    })
    
    if(triedWord.length === words.length) {
        answer = [0,0]
    }
    
    

    return answer;
}
// (idx)+3/3)


// words에서 map 돌려야함
// idx % n + 1  = 몇번째 사람
// Math.floor((idx /n) + 1) / 3 몇번째 시도
// 다른 배열 만들어서 거기에 넣고 만약 word가 그 배열에 속해있으면 그것도 -> [몇번째 사람, 몇번째 시도]
// words.slice(-1) !== word[idx].slice(0,1) -> [몇번째 사람, 몇번째 시도]
// 둘 다 해당 아니면 [0,0]
