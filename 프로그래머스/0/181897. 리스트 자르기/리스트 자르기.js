function solution(n, slicer, num_list) {
    var answer = [];
    switch(n){
        case 1 :
            return answer = num_list.slice(0,slicer[1]+1)
            break;
        case 2:
            return answer = num_list.slice(slicer[0],num_list.length+1)
            break;
        case 3:
            return answer = num_list.slice(slicer[0], slicer[1]+1)
            break;
        case 4:
            answer = num_list.slice(slicer[0], slicer[1]+1)
            return answer = answer.filter((_,i)=>i % slicer[2] === 0)
    }
    
    return answer;
}