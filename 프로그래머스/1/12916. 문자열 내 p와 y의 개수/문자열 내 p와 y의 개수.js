function solution(s){
    var answer = true;

    s=s.toLowerCase();
    let yfreq=0;
    let pfreq=0;
    
    for(let i=0;i<s.length;i++){
        if(s[i]=='y'){
            yfreq++;
        }
        if(s[i]=='p'){
            pfreq++;
        }
        answer=yfreq===pfreq ? true : false
    }
    return answer;
}
