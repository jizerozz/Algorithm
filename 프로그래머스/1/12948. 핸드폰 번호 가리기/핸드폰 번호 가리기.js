function solution(phone_number) {
    var answer = '';
    const useNum = phone_number.slice(-4)
    const hideNum = phone_number.slice(0,-4)
    answer = hideNum.replaceAll(hideNum, '*'.repeat(hideNum.length)) + useNum
    return answer;
}