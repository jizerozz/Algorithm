function solution(order) {
    let hasTruck = []
    
    let findBox = 0
        
        for(let box=1; box<=order.length; box++){
            if(order[findBox] === box){
                findBox++
            }else{
                hasTruck.push(box)
            }
            
            while(hasTruck.length && hasTruck[hasTruck.length - 1] === order[findBox]){
                hasTruck.pop()
                findBox++
            }
        }
        
    
    return findBox;
}

// 1 2 3 4 5  >> 1 2 3 push hasTruck
// 4 3 1 2 5  >> shift -> has Truck pop -> 