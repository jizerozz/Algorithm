function solution(number, limit, power) {
    let answer = 0
    let res = [];
    
    let numbers = Array.from({length:number}, (_,idx) => idx+1)
   
    //약수의 개수 구하기
    const numbersOfPrime = numbers.map((n) => {
        let count = 0;
        
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0){
                count += (i * i === n ? 1 : 2)
                if(count > limit) break; 
            }
        }

        return count;
    })
    
    //필요한 철 무게 구하기
    res = numbersOfPrime.map((w) => {
        if(w <= limit){
            return w
        }else{
            return power
        }
    })
    
    answer = res.reduce((acc, cur) => acc + cur)
    return answer
}

//number만큼 배열 만들고 n번째에 해당하는 약수의 개수 넣어서 저장
//배열 내 limit보다 큰 무기가 있으면 power 만큼의 무기를 구매하도록 함
//배열의 합 구하면 됨