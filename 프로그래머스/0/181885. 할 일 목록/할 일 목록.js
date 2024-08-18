function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((todo, idx)=>{
        return finished[idx] === false
    })
    return answer;
}