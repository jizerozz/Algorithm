function solution(keymap, targets) {
    var answer = [];    
    let storedKeyIdx = {}  
    
        for(let j=0; j<keymap.length; j++){
            let alphabet = ''
            for(let w=0; w<keymap[j].length; w++){
                alphabet = keymap[j][w]
                
                if(storedKeyIdx[alphabet] && storedKeyIdx[alphabet] < w + 1){
                    continue
                }
                
                storedKeyIdx[alphabet] = w + 1
            }
        }
    
    
        for(let target of targets){
            let sum = 0
            let arrayTarget = target.split('')
            
            for(let i=0; i<arrayTarget.length; i++){
                if(!storedKeyIdx[arrayTarget[i]]){
                    sum = -1
                    break
                }
                
                sum += storedKeyIdx[arrayTarget[i]]
            }
            
            answer.push(sum)
        }
    
    
    return answer;
}

//keymap의 각 요소를 순회하면서 요소 내부의 단어 위치(인덱스가) 작은 순으로 객체에 저장되도록 함
//targets를 순회하면서 각 요소의 단어에 해당하는 storedKeyIdx에 저장된 인덱스값을 가져와서 sum에 저장