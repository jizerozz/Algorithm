function solution(s) {
    var answer = '';
    const words = s.split(' ')
    
    const change = (word) => {
        return word.split('').map((item, idx) =>{
            return idx % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
        }).join('')
    }
    
    answer = words.map((item) => change(item)).join(' ')
    return answer;
}