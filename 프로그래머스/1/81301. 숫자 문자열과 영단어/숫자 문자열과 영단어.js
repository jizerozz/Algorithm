function solution(s) {
    var answer = 0;
    let wordsArr=["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    wordsArr.map((str,idx)=>{
        s=s.replaceAll(str, idx);
        answer=parseInt(s);
    });
    return answer;
}


//s 길이만큼 순회, strArr에 해당하는 문자 있으면 숫자로 대체
//[0-9] -> idx
//str, idx => "zero", 0