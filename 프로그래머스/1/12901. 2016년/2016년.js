function solution(a, b) {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let date = new Date()
    let year = date.setFullYear(2016)
    console.log(date)
    let month = date.setMonth(a-1)
    let day = date.setDate(b)
    let res = date.getDay()
    return answer= week[res]
}