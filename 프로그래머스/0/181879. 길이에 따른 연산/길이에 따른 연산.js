function solution(num_list) {
    var answer = 0;
    num_list.length >= 11 ? 
        num_list.forEach((item)=>answer+=item) : 
        answer = num_list.reduce((el, item)=>el*item, 1)
    return answer;
}