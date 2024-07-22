function solution(num_list) {
    var answer = 0;
    let hol=[];
    let zzak=[];
    for(let i=0;i<num_list.length;i++){
       num_list[i] % 2=== 1 ?
            hol.push(num_list[i]):
            zzak.push(num_list[i]);
    }
     answer=Number(hol.join(''))+Number(zzak.join(''));
    return answer;
}