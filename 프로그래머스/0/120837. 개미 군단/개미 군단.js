function solution(hp) {
    var answer = 0;
    let jang=parseInt(hp/5);
    let byeong=parseInt((hp%5)/3);
    let work=parseInt((hp%5)%3/1);
    
    answer=jang+byeong+work;
    
    
    return answer;
}