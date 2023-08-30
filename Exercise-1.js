// Exercise -1 => Guess The Numbers 

// Write a Javascript program to generate a random number and store it in a variable.
// The program then takes an input from the users to tell them whether the from the quess users correct, greater or lesser than the original number.
// 100 -(no of quesses) is the score of the user.
// The program is expected to terminate once the number is guessed.
// Numbers should be between 1-100.

let a = Math.random() + 100;
a = Number.parseInt(a);
let input;
let score = 100;

while(input!=1){
    score = score -1;
    input = prompt("Enter the the number:");
    if (input == a){
        console.log("You guess the correct number:");
        console.log(`You guess the actual number in ${100-score} chances`);

    }
    else if (input > a && input < 100){
        console.log("Your number is greater than actual number");
            
        }
    else if (input <a && input > 0){
        console.log("Your number is smaller than actual number");
    }
    else{
        console.log("Enter the between 1 to 100!!");
    }

    }
