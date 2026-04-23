function solution(progresses, speeds) {
    var answer = [];
    let days = []
    let progress = 1
    
    for(let i=0; i<progresses.length; i++){
        let pendingTask = 100 - progresses[i]
        let workDay = Math.ceil(pendingTask / speeds[i])
        days.push(workDay)
    }
    
    let current = days[0]
  
    for(let i=1; i<=days.length; i++){
        //현재 기능이 다음 기능들보다 작업이 끝나는 기간이 더 길 때
        if(days[i] <= current){
            progress++
            
        //다음 기능들보다 작업기간이 더 짧을 때
        }else{
            answer.push(progress)
            current = days[i]
            progress = 1
        }
    }
    
    
    return answer;
}