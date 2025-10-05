function solution(topping) {
    var answer = 0;
    let left = new Map()
    let right = new Map()
    
    for(let i=0; i<topping.length; i++){
       right.set(topping[i],(right.get(topping[i]) || 0) + 1)
    }
    
    for(let i=0; i<topping.length; i++){
        left.set(topping[i], (left.get(topping[i]) || 0) + 1) //왼쪽에 하나 추가
        right.set(topping[i], right.get(topping[i]) - 1) //오른쪽에 있던게 옮겨지니까 하나 제거
        
        if(right.get(topping[i]) === 0) right.delete(topping[i]) //오른쪽에 해당하는 토핑이 없으면 해당 토핑 키 삭제
        
        if(left.size === right.size) answer++
    }
    
    
    return answer;
}


// 잘라서 [a,b]에 나눠서 넣은 다음 set 시켜서 중복 제거하고
// 길이가 같으면 count++

// 한쪽에 한번에 몰아넣고
// 다른 한쪽으로 옮길 때 해당 토핑에 해당하는 갯수를 하나씩 줄여나가는걸로
// 토핑이 존재하지 않으면 토핑 없앰
// 토핑 갯수가 왼쪽과 오른쪽이 같으면 그때 count++