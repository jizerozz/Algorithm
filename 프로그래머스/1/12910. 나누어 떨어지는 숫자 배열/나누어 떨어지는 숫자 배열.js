function solution(arr, divisor) {
    const num = arr.filter((item)=>{
        return item%divisor === 0 
    })
    return num.length > 0 ? num.sort((a,b)=>a-b) : [-1]
}