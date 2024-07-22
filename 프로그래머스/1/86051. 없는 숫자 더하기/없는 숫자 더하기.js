function solution(numbers) {
    const originArr = [0,1,2,3,4,5,6,7,8,9]
    var answer = 0;
    let check = originArr.filter((item) => !numbers.includes(item))
    check.forEach((el) => answer+= el)
    return answer;
}