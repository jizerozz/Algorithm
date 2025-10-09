function solution(board, moves) {
    var answer = 0;
    let basket = []
        moves.forEach((move)=>{
           const col = move -1
            for(let row = 0 ; row<board.length; row++){
                if(board[row][col] !== 0 ){
                    const doll = board[row][col]
                    console.log(doll)
                    board[row][col] = 0
        
                    if(basket[basket.length - 1] === doll){
                        basket.pop()
                        answer+=2
                    }else{
                        basket.push(doll)
                    }
                    break
                }
            }
        })
    return answer;
}