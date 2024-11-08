function solution(myString) {
    let answer=''
    Array.from(myString).forEach((word)=>{
        if(word.charCodeAt()<108){
            word = 'l'
        }
            answer += word
    })
    return answer
}