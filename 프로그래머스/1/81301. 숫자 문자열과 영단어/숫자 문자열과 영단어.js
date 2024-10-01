function solution(s) {
    var answer = 0;
    let wordsArr=["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    wordsArr.map((str,idx)=>{
        s=s.replaceAll(str, idx);
        answer=parseInt(s);
    });
    return answer;
}
