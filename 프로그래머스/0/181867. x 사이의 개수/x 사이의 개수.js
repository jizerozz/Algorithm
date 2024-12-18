function solution(myString) {
    var answer = [];
    myString.split('x').map((item)=>answer.push(item.length))
    return answer;
}