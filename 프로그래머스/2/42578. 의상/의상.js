function solution(clothes) {
    var answer = 0;
    let mix = 1
    let sum = 0
    let combiCloth = new Map()
    
    for(let [cloth, type] of clothes){
       if(!combiCloth.has(type)){
           combiCloth.set(type, [])
       }
        
        combiCloth.get(type).push(cloth)
    }
    
   for(let [key, value] of combiCloth){
       if(combiCloth.size === 1){
           answer = value.length
       }else{
           mix *= (value.length + 1)
           answer = mix - 1
       }
   }
    
    return answer;
}