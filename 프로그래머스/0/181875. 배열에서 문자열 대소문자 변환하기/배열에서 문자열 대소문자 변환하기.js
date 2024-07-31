function solution(strArr) {
    var answer = [];
    return answer = strArr.map((str, idx) => {
        return idx % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
    })
    
}