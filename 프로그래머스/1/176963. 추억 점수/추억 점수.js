function solution(name, yearning, photo) {
    var answer = [];
    let nameYearning = {}
    
    name.forEach((el, idx) => {
       nameYearning[el] = yearning[idx] 
    })
    
    photo.map((el,idx) => {
        let sum = 0
        el.forEach((item, idx2) =>{
            Object.keys(nameYearning).includes(item) ? sum+=nameYearning[item] : sum+0
        })
        answer.push(sum)
    })
    
    
   
    
    
    return answer;
}