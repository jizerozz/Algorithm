function solution(my_string, queries) {
    //var answer = '';
    let arr=my_string.split('');

    for(let i=0;i<queries.length;i++){
        let [s,e]=queries[i];
        
        let sliceArray=arr.slice(s,e+1).reverse();
        
        for(let j=s;j<=e;j++){
            arr[j]=sliceArray[j-s];
            }
    }
    return arr.join('');
}

console.log(solution("rermgorpsam", [[2,3], [0,7], [5,9], [6,10]]))