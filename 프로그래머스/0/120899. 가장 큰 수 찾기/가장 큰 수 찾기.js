function solution(array) {
    var answer = [];
    const maxNum = Math.max(...array)
    array.filter((item, idx)=> {
        if(item === maxNum){
            return answer=[item, idx]
        }
    })
    return answer;
}