function solution(want, number, discount) {
    var answer = 0;
    let wantCnt = {}
    
    want.map((item, idx) =>{
        wantCnt[item] = number[idx]
    })
    
    for(let i=0; i<=discount.length - 10; i++){
        let discountCnt = {}
        let sliceItems = discount.slice(i, i+10)
        
        sliceItems.map((item) => {
            discountCnt[item] = (discountCnt[item] || 0) + 1
        })
        
        const isMatch = Object.keys(wantCnt).every((item) => 
            discountCnt[item] === wantCnt[item]
        )
        
        if(isMatch){answer++}
    }
    

    
   
    
    return answer;
}