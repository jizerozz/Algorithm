function solution(A, B) {
    if(A === B){
        return 0
    }
    
    let rotated = A;
    for (let i = 1; i <= A.length; i++) {
        rotated = rotated.slice(-1) + rotated.slice(0, -1);
        if (rotated === B) return i;
    }

    return -1;
}