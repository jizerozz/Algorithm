function solution(numbers) {
    const numberofEng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    numberofEng.forEach((num, idx)=>{
        numbers = numbers.replaceAll(num, idx)
    })
    return Number(numbers)
}