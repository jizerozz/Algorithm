function solution(s) {
    var answer = [];
    const words = s.split(' ')

    words.forEach((word)=>{
        if(word === ''){
            answer.push('')
        }else{
        word = word.toLowerCase()
        if(word[0].charCodeAt()>96){
           word = word.replace(word[0], word[0].toUpperCase())
        }
        answer.push(word)
        }
    })
    return answer.join(' ')
}
                   