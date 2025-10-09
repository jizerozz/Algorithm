function solution(arr) {
    var answer = 0
    arr.forEach((el)=>{
        answer+=el
    })
    return answer/arr.length
}