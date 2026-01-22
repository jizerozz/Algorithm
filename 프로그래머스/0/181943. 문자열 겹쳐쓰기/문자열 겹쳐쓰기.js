function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    let cutword=my_string.slice(0,s);
    
    answer=cutword+overwrite_string+my_string.slice(s+overwrite_string.length);
   
    return answer;
}

console.log(solution("He11oWor1d","lloWorl",2))
console.log(solution("Program29b8UYP","merS123",7))