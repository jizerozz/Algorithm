function solution(n, works) {
    var answer = 0;
    let len = works.length
    works.sort((a,b) => b-a)  
    
    for (let i = 0; i < n; i++) {
    if (works[0] === 0) break;
    works[0]--;

    let j = 0;
    while (j < works.length - 1 && works[j] < works[j + 1]) {
      [works[j], works[j + 1]] = [works[j + 1], works[j]];
      j++;
    }
  }
    
    
    answer = works.reduce((acc, cur) => acc += cur*cur ,0)
     
    return answer;
}


//효율성 실패 ;; sort때문임..
//works.sort((a,b) => b-a)  
//     for(let i=0; i<n; i++){
//         if(works[0] === 0) break;
        
//         works[0] -= 1
        
//         works.sort((a,b) => b-a)
//     }
    
//     answer = works.reduce((acc, cur) => acc += cur*cur ,0)
    