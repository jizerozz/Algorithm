function solution(n, control) {
    var answer = 0;
    for(let i=0;i<control.length;i++){
        if(control[i]==='w'){
            n+=1;
        }else if(control[i]==='s'){
            n-=1;
        }else if(control[i]==='a'){
            n-=10;
        }else if(control[i]==='d'){
            n+=10;
        }
    }
    answer=n;
    return answer;
}