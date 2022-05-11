function add(x,y) {
    if(x instanceof Number || y instanceof Number) return x+y;
    return x+y;
};
function subtract(x,y){
    // if(x.isPrototypeOf(Number) && y.isPrototypeOf(Number)) 
    return x-y;
}
function multiply(x,y){
    // if(x.isPrototypeOf(Number) && y.isPrototypeOf(Number)) 
    return x*y;
}
function divide(x,y){
    // if(x.isPrototypeOf(Number) && y.isPrototypeOf(Number)&& y != 0) 
    return x/y;
}
const pi = 3.14;

const obj = {
    add,
    subtract,
    multiply,
    divide,
    pi,
};
module.exports = obj;