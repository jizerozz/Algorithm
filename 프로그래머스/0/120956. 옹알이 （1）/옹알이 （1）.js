function solution(babbling) {
    var answer = 0;
    let arr=["aya","ye","woo","ma"];
    
    babbling.forEach((el, idx)=>{
        arr.forEach((cry) => {
            el = el.replaceAll(cry, ' ')
        })
        console.log(el)
        if(el.trim().length === 0){
            answer++
        }
    })
    return answer;
}