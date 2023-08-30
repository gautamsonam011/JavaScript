let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is",1+(a+b)/2);
console.log("Average of b and c is",1+(b+c)/2);
console.log("Average of c and a is",1+(c+a)/2);

function onePlusAvg(x,y){
    return 1+(x+y)/2
}
console.log(onePlusAvg(5,6))
// function mathRoundPlus(x,y){
//     return mathRound(x+y);
// }
// console.log(mathRoundPlus(5,8));

const sum = (p,q)=>{
    return p+q;
}
console.log("Arrow Function",sum(10,20));

// Types of Functions in Javascript:- 
// Function Declaration

function add(a,b){
    console.log(a+b);
}
add(3,4);

// Function Expression

const add1 = function(x,y){
    z = x**y;
    console.log(z);
}
add1(2,3);

// Arrow Function

const great = (x,y)=>{
    if(x > y){
        return ("x is greater");
    }
    else{
        return ("y is greater");
    }
}
console.log(great(3,6));

let sum1 = (a,b) => a+b;
console.log(sum1(3,2));