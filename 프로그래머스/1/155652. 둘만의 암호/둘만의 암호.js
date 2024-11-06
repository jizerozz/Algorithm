function solution(s, skip, index) {
    var answer = '';
    
    function findIndexAlpha(word, idx){
        const alphabet='abcdefghijklmnopqrstuvwxyz'
        
        const sliceSkipAlphabet = alphabet.split('').filter((alpha)=>!skip.includes(alpha))
        
        const currentIdx = sliceSkipAlphabet.indexOf(word)
        const answerIdx = (currentIdx+idx) % sliceSkipAlphabet.length
        
        return sliceSkipAlphabet[answerIdx]
    }
    
    Array.from(s).forEach((word)=>{
        if(skip.includes(word)){
            return
        }
        answer+=findIndexAlpha(word, index)
    })
    return answer;
}