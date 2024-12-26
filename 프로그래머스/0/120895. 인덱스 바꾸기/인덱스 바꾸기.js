function solution(my_string, num1, num2) {
    const arr = my_string.split('')
    const fword =arr[num1]
    const sword =arr[num2]
    
    arr.splice(num1, 1, sword)
    arr.splice(num2, 1, fword)
    return arr.join('')
    
}