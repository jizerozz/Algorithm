function solution(sizes) {
    var answer = 0;
    let maxW = 0
    let maxH = 0
    
    for(let size of sizes){
        const [x, y] = size
        const big = Math.max(x, y)
        const small = Math.min(x, y)
        
        maxW = Math.max(maxW, big)
        maxH = Math.max(maxH, small)
        answer = maxH * maxW
    }
    
    
    return answer;
}

//모든 명함을 수납할 수 있는 가장 작은 크기의 직사각형 지갑을 만들어야함
//일단 가로는 제일 큰 길이
//세로는 두번째로 큰 길이

