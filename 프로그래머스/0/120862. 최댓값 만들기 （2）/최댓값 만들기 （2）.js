function solution(numbers) {
    numbers.sort((a,b) => a-b)
    const front = numbers[0] * numbers[1] 
    const end = numbers.at(-1) * numbers.at(-2)
    
    return front > end ? front : end
}