const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
});
readline.question('What is your name? ', name => {


readline.question('How old are you?', age => {
    console.log(`Welcome ${name}, your age is ${age}`);
    if(age<16) return console.log("You're not allowed to driver in Iowa");
    console.log("You're allowed to get a drivers license in Iowa");
    
    
    
    
    readline.close();
});


});
