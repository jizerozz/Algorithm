function solution(a, b) {
    var answer = '';
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let date = new Date()
    let year = date.setFullYear(2016);
    let month = date.setMonth(a-1);
    let day = date.setDate(b);
    let dayofweek = date.getDay();
    answer= week[dayofweek];

    return answer;
}