function solution(arr) {
    const X = []
    arr.forEach((num)=>{
               for(let i=0; i<num; i++){
                   X.push(num)
               }
    })
    return X
}