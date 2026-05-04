function solution(numbers) {
    let number = ''
    number = numbers.map(String).sort((a,b) => (b+a) - (a+b))
    return number[0] === "0" ? "0" : number.join("")
}