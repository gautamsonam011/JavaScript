// 1:- Write a program using prompt function to take input of age a value from the user and use alert to tell him if he can Drive.

// let age = prompt("Enter your age");
// age = Number.parseInt(age);

// const canDrive = (age) =>{
//     return age >= 18? true:false;
// }
// if (canDrive(age)){
//     alert("Yes, you can Drive");
// }
// else{
//     alert("You can not drive")
// }
// 2:- In q1 use confirm to ask the user if he wants to see the prompt again.
// const canDrive = (age) =>{
//     return age >= 18? true:false;
// }

// let runAgain = true;

// while(runAgain){
//     let age = prompt("Enter your age");
//     age = Number.parseInt(age);

//     if (canDrive(age)){
//         alert("Yes, you can Drive");
//     }
//     else{
//         alert("You can not drive")
//     }
//     runAgain = confirm("Do you want to play again")
//     }
// 3:- In the previous question use console error to log the error if the age entered is negative.
const canDrive = (age) =>{
    return age >= 18? true:false;
}

let runAgain = true;

while(runAgain){
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (age < 0){
        console.error("Please enter a valid age");
        break;
    }
    if (canDrive(age)){
        alert("Yes, you can Drive");
    }
    else{
        alert("You can not drive")
    }
    runAgain = confirm("Do you want to play again")
    }


// 4:- Write a program to change the url google.com () (Redirection) if user enters a number greater than 4. 

let number = prompt("Enter your number:");
number = Number.parseInt(number);
if (number > 4){
    location.href = "https://google.com";
}
// 5:- Change the background of the page to yellow, red or any other color based on user input through prompt.

let color = prompt("Enter the page background color");
document.body.style.background = color;
