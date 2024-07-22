function solution(array,n){
        let value = array.filter((el) => (el === n))
        return value.length
}