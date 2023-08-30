// Write a program to print the marks of a student in an object using for loop 
// obj = { neha:78,rohan:59,akash:39}
let marks = { 
    neha:78,
    rohan:59,
    akash:39};

for (i = 0; i< Object.keys(marks).length; i++){
    console.log("The marks of "+ Object.keys(marks)[i]+ "are" + marks[Object.keys(marks)[i]]);
}

for (let i in marks){
    console.log(i)
}
// Write the program in q1 using for in loop 
for (let key in marks){
    console.log("The marks of"+ key+ "are" + marks[key])
}
// Write a program to print try again until the user enters the correct number. 

let corrnum = 30;
let i
while(i!=corrnum){
    i = prompt("Enter a number");
}
console.log("You have entered a correct number");


// Write a function to find mean of 5 numbers . 

const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}
console.log(4,5,6,7);
