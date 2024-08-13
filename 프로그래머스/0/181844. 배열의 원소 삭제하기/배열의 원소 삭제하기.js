function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter((item)=>{
        return !delete_list.includes(item)
    })
    return answer;
}