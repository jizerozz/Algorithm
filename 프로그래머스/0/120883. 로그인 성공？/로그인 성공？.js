function solution(id_pw, db) {
    var answer = '';
    answer= 'fail'
    db.forEach((el, idx) => {
        if(el[0] === id_pw[0] && el[1] !== id_pw[1]){
            answer = 'wrong pw'
        }else if(el[0] === id_pw[0] && el[1] === id_pw[1]){
            answer = 'login'
        }
    })
    return answer;
}