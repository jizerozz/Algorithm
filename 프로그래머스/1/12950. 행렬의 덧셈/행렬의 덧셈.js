function solution(arr1, arr2) {
    var answer = [];
    let sum = 0
   for(let i=0; i< arr1.length; i++){
       let row = []
       for(let j=0; j< arr1[i].length; j++){
          sum = arr1[i][j] + arr2[i][j]
          row.push(sum)
       }
       answer.push(row)
   }
    
    return answer;
}