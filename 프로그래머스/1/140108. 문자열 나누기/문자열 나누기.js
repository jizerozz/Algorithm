function solution(s) {
    var answer = 0;
    let remainString = []
    
    while(s.length > 0){
        let freq = [0,0]
        const idx = freqNum(s, freq)
       
        if(idx !== -1){
            answer += 1
            //remainString.push(s.slice(0,idx+1))
            s = s.slice(idx+1)
        }else{
            answer+=1
            //remainString.push(s.slice(idx))
            break
        }
    }
    return answer;
}

function freqNum(words, freq){
    const x = words[0]
    for(let i = 0 ; i< words.length; i++){
        if(words[i] === x){
            freq[0]+=1
        }else{
            freq[1]+=1
        }
        
        if(freq[0] === freq[1]){
            return i
        }
    }
    return -1
}


// 같은거 안같은거
// 1 0
// 1 1
// ab racadabra

// 1 0
// 1 1
// ra cadarbra

// 1 0
// 1 1
// ca dabra

//1 0
//1 1
// da bra

//1 0
//1 1
// br a

// a


// 같은거 안같은거
// 1 0
// 2 0
// 3 0
// 3 1
// 3 2
// 4 2
// 4 3
// 4 4 aaabbacc ccabba

// 1 0 
// 2 0 
// 2 1
// 2 2 ccab

// 1 0
// 1 1 ba

 
