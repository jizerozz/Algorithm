function solution(my_string) {
    var answer = [];
    [...my_string].map((el) =>{
        if(el.match(/[a-z]/)){
            el = el.toUpperCase()
        }else{
            el = el.toLowerCase()
        }
       answer.push(el)
    })
    return answer.join('');
}