function solution(polynomial) {
    var answer = {x: 0}
    let sum = 0
    let res = ''
    
    polynomial.split("+").forEach((p) =>{
        let term = p.trim()
        if(term.includes("x")){
            if(term === "x"){
                answer.x += 1
            }else{
                const coef = Number(term.slice(0, -1))
                answer.x += coef
            }
            
        }else{
            sum += Number(p)
        }
    })
  
    if(answer.x) res += answer.x === 1 ? "x" : `${answer.x}x`
    
    if(sum) res += (res ? " + " : "") + sum
    
    return res
  
}