function solution(arr) {
    let answer=[]
    let min = Math.min(...arr)
    answer = arr.filter((el)=>{
      return el!==min
    })
    
    return answer.length > 0 ? answer : [-1]
}