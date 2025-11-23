function solution(num_list) {
    var answer = [];
    let add=0;
    for(let i=0;i<num_list.length;i++){
        answer.push(num_list[i]);
        if(num_list[num_list.length-1]>num_list[num_list.length-2]){
            add=num_list[num_list.length-1]-num_list[num_list.length-2];
        }else{
            add=num_list[num_list.length-1]*2;
        }
    }
    answer.push(add);
    
    return answer;
}