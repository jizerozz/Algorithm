function solution(numbers, n) {
    var answer = 0;
    for(let num of numbers){
        answer+=num
        if(answer > n){
            return answer
        }
    }
}