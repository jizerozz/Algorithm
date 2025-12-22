function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase().split(/[^a-z0-9\-_.]/).join('')
    new_id = new_id.split(/\.{2,}/).join('.') //.이 2개 연속으로 나오는 부분을 기준으로 나누고 조인
        
        //첫번째 문자와 마지막 문자가 .이면 삭제
        new_id=new_id.replace(/^\./, "").replace(/\.$/, "");
    
        
        if(new_id.length === 0){   //빈 문자열이면 a대입
            new_id='a'
        }
    
        new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id
        new_id = new_id.at(-1) === '.' ? new_id.slice(0,-1) : new_id
    
        while(new_id.length < 3){
            new_id += new_id.at(-1)
        }

        answer = new_id
        return answer
}

//new_id.isLowerCase()
//소문자, 숫자, 빼기, 밑줄, 마침표 제외한 문자 제거 <-split
//if(first.at(0)==='.'||first.at(-1)==='.') //첫번째나 마지막에 마침표 .이 위치하면 replace = ''