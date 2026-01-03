const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let wordArr=[];
    wordArr=str.split("");
    
    for(let i=0;i<wordArr.length;i++){
        if(wordArr[i].charCodeAt()>=65&&wordArr[i].charCodeAt()<=90){
          wordArr[i]=wordArr[i].toLowerCase();
        }else if(wordArr[i].charCodeAt()>=97&&wordArr[i].charCodeAt()<=122){
          wordArr[i]=wordArr[i].toUpperCase();
        }
    }
    str=wordArr.join('');
    console.log(str) 
});


    