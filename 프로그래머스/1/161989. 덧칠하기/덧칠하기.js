function solution(n, m, section) {
    var answer = 0
    let painted = 0

    for (let i = 0; i < section.length; i++) {
        if(section[i] > painted ){
            painted = section[i] + m - 1
            answer++
        }
     }
    return answer;
}

