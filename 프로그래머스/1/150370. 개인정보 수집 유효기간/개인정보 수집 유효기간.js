function solution(today, terms, privacies) {
    var answer = [];
    
    privacies.forEach((privacy, idx)=>{
        let [privacyD, privacyType] = privacy.split(' ')
        let privacyDate = new Date(privacyD) //수집일자 Date로 형변환
        //console.log(privacyDate)
        
        for(let term of terms){
        let [termType, termMonth] = term.split(' ')
        termMonth = Number(termMonth)
            
        if(privacyType != termType){ //수집된 정보의 약관종류와 terms약관종류가 일치하지 않으면 무시
            continue
        }
        
        privacyDate.setMonth(privacyDate.getMonth() + termMonth) //유효한지 확인할 날짜 
        console.log(typeof privacyDate)
        let expireDate = new Date(today) //오늘 날짜
        
            if(expireDate >= privacyDate){ //유효한지 확인할 날짜가 오늘날짜와 같거나 오늘날짜보다 전이면 파기
                answer.push(idx+1) //파기해야할 개인정보의 번호는 1부터 시작
            }
        }
    })
    return answer;
}