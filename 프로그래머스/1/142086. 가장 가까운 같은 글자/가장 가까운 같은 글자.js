function solution(s) {
    var answer = [];
    const newWord=[]
    s = s.split('')
    s.forEach((el, idx1)=>{
        if(!newWord.includes(el)){
        newWord.push(el)
        answer.push(-1)
        }else{
            let closestIdx = -1
            s.filter((item, idx2) => {
                if(el === item && idx2 < idx1){
                    closestIdx = idx2
                }                    
            })
        answer.push(idx1 - closestIdx)
        }
    })
   
    return answer;
}

// 처음 나오는 문자는 newWord라는 배열에 저장시키고 넣을 때 -1로 표현
// 이후 뒤에서 나오는 문자가 이미 앞에서 나온 문자인 경우 앞 문자와 몇 칸 차이인지 계산
