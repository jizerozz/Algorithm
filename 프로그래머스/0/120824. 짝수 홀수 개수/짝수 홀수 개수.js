function solution(num_list) {
    var answer = [];
    let scnt = 0
    let hcnt = 0
    num_list.map(item=>{
        item%2 === 0 ? scnt++ : hcnt++
        answer = [scnt, hcnt]
    })
    return answer;
}