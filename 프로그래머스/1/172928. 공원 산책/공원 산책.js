function solution(park, routes) {
    var answer = [];
    
    let height=park.length-1;
    let width=park[0].length-1;
    //시작점 구하기
    let row = park.findIndex(el=>el.includes('S')) //S를 가진 행의 index를 찾음
    let column = park[row].indexOf('S') //행에 위치한 S의 index
    
    //routes가 없을 경우, 주위가 장애물로 가득 차있는 경우는 시작점을 리턴시켜줘야함
    answer=[row,column]
    
    for(let route of routes){
        let [op, n]=route.split(' ') //route 구조분해 할당
        let moveRow = row
        let moveColumn = column
        let validMove=true
        
        for(let i = 0;i < Number(n); i++){
        
            if(op === 'E') moveColumn++ //동쪽 이동 (column ++)
            if(op === 'S') moveRow++ //북쪽 이동 (row) ++)
            if(op === 'W') moveColumn-- //서쪽 이동 (column --)
            if(op === 'N') moveRow-- //남쪽 이동 (row --)
        
            if(moveRow > height || moveColumn > width || moveRow < 0 || moveColumn < 0 
               || park[moveRow][moveColumn]==='X') {
                validMove = false;
                continue;
            }
        }
        
        if(validMove === true){
            row = moveRow;
            column = moveColumn;
            answer = [row,column];
        }
    }
    
    return answer;
}
 //console.log(el)
           
//s 시작점 o 이동 가능 통로 x 장애물 
//(x,y) 
//동쪽으로 이동 y+이동한 거리 | 서쪽으로 이동 y-이동한 거리 
//남쪽으로 이동 x+이동한 거리 | 북쪽으로 이동 x-이동한 거리

//routes를 통해 방향, 가야할 지점 확인 
//park의 시작점 S 확인 1번째는 0,0 2번째는 0,0 3번째는 0,1
//S로 부터 가야할 지점을 갈 수 있는지 확인 -> 만약 지금지점부터 가야할 지점까지 합한 값이 length 보다 크면 못감 작아도 못감
//갈 수 없으면 시작점에 그대로, 그 다음의 갈 수 있는 지점 확인
//갈 수 있으면 그만큼 이동하고 S는 이동한 좌표로 재정의

