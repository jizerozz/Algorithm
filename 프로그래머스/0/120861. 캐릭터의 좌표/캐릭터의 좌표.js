function solution(keyinput, board) {
    var answer = [];
    let coordinate = [0,0]
    keyinput.map((el)=>{
        if(el === 'up'){
            coordinate[1] += 1
        }
        if(el === 'down'){
            coordinate[1] -= 1
        }
        if(el === 'left'){
            coordinate[0] -= 1
        }
        if(el === 'right'){
            coordinate[0] += 1
        }
        
        if (Math.abs(coordinate[0]) > board[0] / 2) {
            coordinate[0] = (coordinate[0] > 0 ? 1 : -1) * Math.floor(board[0] / 2);
        }
        if (Math.abs(coordinate[1]) > board[1] / 2) {
            coordinate[1] = (coordinate[1] > 0 ? 1 : -1) * Math.floor(board[1] / 2);
        }
    })
    answer = coordinate
    return answer;
}