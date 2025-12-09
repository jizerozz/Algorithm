function solution(babbling) {
    var answer = 0;
    const arr=["aya","ye","woo","ma"];
    const repeatArr=["ayaaya","yeye","woowoo","mama"];//발음이 연속되는 문자열을 저장한 배열
    
    for(let i of babbling){
        for(let j=0;j<arr.length;j++){
            i=i.replaceAll(repeatArr[j],0); //babbling 배열을 순회하면서 발음이 연속되는 문자열들은 0으로 대체
            i=i.replaceAll(arr[j]," "); //babbling 배열을 순회하면서 arr[j]에 해당하는 문자열들은 공백으로 대체
        }
        console.log(i);
        if(i.trim().length===0){ //공백을 제외한 문자열의 길이가 0이면 answer 값 증가
            answer++;
        }
    }
    return answer;
}