function solution(s) {
    var answer = '';
    let sArr=[];
    sArr=s.split('');
    
    answer=sArr.sort((a,b)=>(b.charCodeAt()-a.charCodeAt()));
    
    return answer.join('');
}



//[A-Z] 65~90, [a-z] 97~122
// sort함수 내림차순 정렬 활용 -> b의 아스키코드값과 a의 아스키코드값을 통해 내림차순 정렬