function solution(price, money, count) {
    var answer = -1
    let pay = 0
    for(let i = 1; i <= count; i++){
        pay += price*i
        answer = pay > money ? pay - money : 0
    }
    return answer;
}

//pay += count * price
//pay - count
//money > pay return 0