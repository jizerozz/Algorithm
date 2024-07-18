function solution(s, n) {
    var answer = '';
    let res = ''
    const char = s.split('')
    char.forEach((el, idx)=>{
        if(el.charCodeAt()>=65 && el.charCodeAt()<=90){
            res = ((el.charCodeAt()-65+n)%26) + 65
            answer+=String.fromCharCode(res)
        }else if(el.charCodeAt()>=97 && el.charCodeAt()<=122){
            res = ((el.charCodeAt()-97+n)%26) + 97
            answer+=String.fromCharCode(res)
        }else{
            answer+=el
        }
    })
   
    
    return answer;
}