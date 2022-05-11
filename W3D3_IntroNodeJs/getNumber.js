const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
});
ask('Input a number until you enter "stop" ');
let sum = 0;
function ask(phrase){
    
    readline.question(phrase, number => {
            if(number==='stop') {
                console.log('sum of nunmbers: ' + sum);
                return readline.close();
            }
            sum += parseInt(number);
            ask(phrase);
    });    
};


