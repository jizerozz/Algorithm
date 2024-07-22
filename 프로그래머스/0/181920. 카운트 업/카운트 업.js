function solution(start_num, end_num) {
    var answer = [];
    return Array(end_num-start_num+1).fill(start_num).map((x,idx)=>x+idx);
}