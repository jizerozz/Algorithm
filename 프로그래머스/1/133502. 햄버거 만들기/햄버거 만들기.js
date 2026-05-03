function solution(ingredient) {
    var answer = 0;
    
    let storedBurger = []
    
    for(let i=0; i<ingredient.length; i++){
        storedBurger.push(ingredient[i])
        
        if(storedBurger.length >= 4 && storedBurger.slice(-4).toString() === '1,2,3,1'){
            storedBurger.splice(-4)
            answer++
        }
    }
    
    
    return answer;
}