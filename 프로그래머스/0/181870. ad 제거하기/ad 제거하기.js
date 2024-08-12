function solution(strArr) {
    var answer = [];
    strArr.map(item=>{
       const word = item.includes('ad') ? '' : item
        answer.push(word)
    })
    return answer.filter(el=> el!='');
}