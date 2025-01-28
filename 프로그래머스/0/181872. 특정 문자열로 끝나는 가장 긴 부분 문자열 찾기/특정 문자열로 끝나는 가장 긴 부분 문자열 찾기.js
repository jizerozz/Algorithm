function solution(myString, pat) {
    const regex = new RegExp(`.*${pat}`)
    return myString.match(regex)[0]
}