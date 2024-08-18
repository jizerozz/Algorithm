function solution(num_list, n) {
    var answer = [];
    const add =num_list.slice(0,n)
    answer = num_list.splice(n, num_list.length-n).concat(add)
    return answer;
}