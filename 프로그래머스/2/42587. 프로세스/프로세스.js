function solution(priorities, location) {
    const process = Array.from({length:priorities.length},(_,idx)=>String.fromCharCode(65+idx))
    const locationChar = process[location]
    
    let queue = priorities.map((p, idx) => [p, process[idx]])
    let activeProcess = []
    
    while(queue.length>0){
        let [priority, name] = queue.shift()
        
        if(queue.some(([p]) => p > priority)){ // priority보다 높은 우선순위가 queue 안에 존재하면 다시 큐 뒤에 priority 넣기
            queue.push([priority, name])
        }else{
            activeProcess.push(name)
        }
    }
    
    
    return activeProcess.indexOf(locationChar)+1 // 첫번째에 실행이 0으로 추출되니까 +1 해줘야함
}

// [A,B,C,D] [2,1,3,2] => 3번째부터 C,D,A,B순으로 실행 => 2번째꺼는 몇번째로 실행되었나 
// => activeProcess에 존재하는 priorities[location] 문자열 인덱스 추출하면 됨