function solution(dartResult) {
    var answer = 0;
    let beforeScore = 0
    let lastScore = 0
    let char = ''
    Array.from(dartResult).forEach((dart, idx)=>{
        if(!isNaN(dart)){
            char+=dart
        }else{
            if(dart === 'S'){
                beforeScore = lastScore
                lastScore = Math.pow(parseInt(char),1)
            }else if(dart === 'D'){
                beforeScore = lastScore
                lastScore = Math.pow(parseInt(char),2)
            }
            else if(dart === 'T'){
                beforeScore = lastScore
                lastScore = Math.pow(parseInt(char),3)
            }
        
            if(dart === 'S' || dart === 'D' || dart === 'T'){
                answer += lastScore
                char = ''
            }
            
        if(dart === '*' ){
            answer += beforeScore
            answer += lastScore
            lastScore *= 2
        }else if(dart === '#'){
            answer -= lastScore * 2
            lastScore *= -1
        }
    }
    })
    return answer;
}


//제곱 계산이군 pow 준비..
//스타상 당첨 시 해당 점수, 바로 전 점수 두 개를 각각 두배로 만듦
//아차상은 마이너스로 바뀐다는거임?
