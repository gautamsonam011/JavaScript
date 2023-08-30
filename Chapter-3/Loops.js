// Types of Loops
// 1:- For Loop
// 2:- While Loop
// 3:- For In Loop
// 4:- for of loop
// 5:- do-while loop

// For Loop:-

// let sum = 0;
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n);
// for (let i = 0; i<n; i++){
//     sum = sum+i;
//     console.log(sum);
// }

// OR 

// let sum = 0;
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n);
// for (let i = 0; i<n; i++){
//     sum = sum+i;
// }
// console.log(sum);


// let sum = 0;
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n);
// for (let i = 0; i<n; i++){
//     sum += i+1;
// }
// console.log("Sum of first" + n + "natural numbers is"+sum);

// // Write a sample for loop

// let n1 = 10;
// for (let i = 1; i<=n1+1; i++){

//     console.log(i++);
// }


// for in loop 

let obj = {
    har:60,
    shubh:40,
    shiv:58,
}

for (let a in obj){
    console.log("Marks of"+ a + "are" +obj[a])
}

// for of loop 
// must need an iterable string or array
for (let b of "Shubh"){
    console.log(b);
}

