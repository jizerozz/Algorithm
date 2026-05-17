function solution(strings, n) {
    let sortStrings = strings.sort()
    return sortStrings.sort((a,b) => a[n].charCodeAt() - b[n].charCodeAt())
   
}