function solution(s) {
    var answer = [0, 0];
    let cnt = 0
    
    while(s.length > 1){
        cnt = s.length
        s = s.split('')
        s = s.filter((num)=>num!=='0')
        answer[0]++
        answer[1] += cnt - s.length
        s = s.length.toString(2)
    }
    
    return answer;
}