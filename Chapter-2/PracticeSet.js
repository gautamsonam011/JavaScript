// 1:- Use logical operators to find whether the age of a person lies between 10 and 20? 

let age = prompt("What is your age");
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age does not lie 10 and 20");
}
// 2:- Demonstrate the use of switch case staments in JavaScript.
let ag = prompt("what is your age");
switch(ag){
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    case '15':
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not special")
}
// 3:- Write a JavaScript program to find whether a numbers is Divisible by 2 and 3.

let num = prompt("Enter number");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisible by 2 and 3");
}
// 4:- Write a JS program to find whether a number is Divisible by either 2 or 3.

let num1 = prompt("Enter number");
num1 = Number.parseInt(num1);
if (num1%2==0 || num1%3==0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisible by 2 and 3");
}
// 5:- Print "You can Drive " or "You cannot Drive" based on age being great than 18 using ternary operator

let a = prompt("Enter the age:");
if (a<18){
   console.log("You can not Drive!"); 
}
else if (a==18){
    console.log("You can Drive!");
}
else{
    console.log("You can Drive!");
}

let ag1 = 45;
let a1 = (ag1>18) ? 'You Drive':'Not Drive';
console.log(a1);