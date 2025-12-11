function solution(survey, choices) {
    var answer = '';
    const type={R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for(let i=0;i<survey.length;i++){
        let score=Math.abs(4-choices[i]); //선택지에 맞는 유형의 점수
        const[firSurvey, secSurvey]=survey[i].split('');
        
             if(choices[i]<4){           //비동의쪽 선택지 선택   
                 type[firSurvey]+=score;
             }else if(choices[i]>4){       //동의쪽 선택지 선택
                 type[secSurvey]+=score;
             }
        //console.log(firSurvey, type[firSurvey], secSurvey, type[secSurvey]) //모든 질문 선택 후 나온 성격유형 점수
    }
        
        let key=Object.keys(type)
        for(let j=0;j<key.length;j+=2){
            let fValue=key[j]
            let sValue=key[j+1]
             if(type[fValue]>=type[sValue]){
                answer+=fValue                 //C,M,A  <- A의 점수와 N의 점수가 같지만 사전순이기 때문에 A가 들어감
            }else{
                 answer+=sValue       //T
            }
        }
    return answer;
}
