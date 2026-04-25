function solution(genres, plays) {
    var answer = [];
    let storedMusic = new Map()
    let playCount = new Set()
  
    
    for(let i=0; i<genres.length; i++){
        //장르별 재생횟수 합산
        playCount[genres[i]] = (playCount[genres[i]] || 0) + plays[i]
        
        //장르별 고유번호 (키), 재생횟수 저장
        if(!storedMusic.get(genres[i] +' '+ i)){
             storedMusic.set(genres[i] +' '+ i, plays[i])
        }
        
    }
    
    //많이 재생된 장르 순 정렬
    const priorityKey = Object.keys(playCount).sort((a, b) => playCount[b] - playCount[a])
    
    
    const sortedMusic = [...storedMusic.entries()].sort((a,b)=>{
        return b[1] - a[1]
    })
    
    for(let g of priorityKey){
        let cnt = 0
        for(let [key, value] of sortedMusic){
            const [k, num] = key.split(" ")
            
            if(g === k){
                answer.push(Number(num))
                cnt++
            }
            
            if(cnt === 2) break
        }
        
        
    }
   
    
    return answer;
}

//음악저장 객체에 키: 장르명i 값: plays[i] 저장
//장르명에 따른 값 합산
//장르별 같은 재생횟수의 노래가 있는지 확인 후 있으면 고유번호가 낮은 노래로 수록