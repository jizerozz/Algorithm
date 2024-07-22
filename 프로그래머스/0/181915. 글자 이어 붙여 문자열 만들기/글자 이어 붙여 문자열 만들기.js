function solution(my_string, index_list) {
    var answer = '';
    let words=[]; 
    for(let i=0;i<index_list.length;i++){
        words.push(my_string[index_list[i]]);
    }
    return answer=words.join('');
}