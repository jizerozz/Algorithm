function solution(rsp) {
    var answer = '';
    Array.from(rsp).forEach((r)=>{
        if(r === '2'){
            answer += '0'
        }else if(r === '0'){
            answer += '5'
        }else{
            answer += '2'
        }
    })
    return answer
}