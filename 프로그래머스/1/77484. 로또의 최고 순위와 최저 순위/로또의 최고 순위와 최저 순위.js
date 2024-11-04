function solution(lottos, win_nums) {
    var answer = [];
    let score={6:1,5:2,4:3,3:4,2:5,1:6,0:6}
   
    const count = lottos.filter((lotto)=> win_nums.includes(lotto))
    const zeroCnt = lottos.filter((lotto)=> lotto === 0)
    
    let maxCnt = count.length+zeroCnt.length
    let minCnt = count.length
    
    answer = [score[maxCnt], score[minCnt]]
    return answer;
}

//민우 동생 이녀석 ~~
//0인 경우 로또 번호와 매치 , 아닌 번호와 매치
