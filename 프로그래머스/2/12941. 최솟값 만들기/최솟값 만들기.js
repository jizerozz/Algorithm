function solution(A,B){
    var answer = 0;
    let mul =0
    A = A.sort((a,b) => a-b)
    B = B.sort((a,b) => b-a)
    A.forEach((el, idx) =>{
        mul = el * B[idx]
        answer += mul
    })
    

    return answer;
}