function solution(strings, n) {
    var answer = [];
    let sortStrings = strings.sort()
    answer= sortStrings.sort((a,b) => a[n].charCodeAt() - b[n].charCodeAt())
    return answer;
}