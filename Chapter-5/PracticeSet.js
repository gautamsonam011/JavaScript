// Create an array of numbers and take input from the user to add numbers to this array. 

let arr = [1,2,3,4,5,64,6];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
// Keep adding numbers to the array in q1 until 0 is added to this array. 
let a1;
do {
    a1 = prompt("Enter a number");
    a1 = Number.parseInt(a1);
    arr.push(a1);
}while(a1!= 0);
console.log(arr);
// filter for numbers divisible by 10 from a given Array. 
let arr1 = [2,3,4,5,6,24,8];
let n = arr1.filter((x) =>{
    return x%10 == 0;
})
console.log(n)
// create an array of square of given SVGAnimatedNumberList. 

let n1 = arr1.map((x) =>{
    return x*x;
})
console.log(n1)
// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number where factorial needs to be calculated). 

let arr3 = [1,2,3,4];
let n3 = arr3.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(n3);