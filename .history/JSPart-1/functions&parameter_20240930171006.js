// Functions and parameter 

function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("A");
    console.log("M");

}

sayMyName()

function addTwoNumbers(no1, no2) // parameters
{
    console.log(no1 + no2);
}

addTwoNumbers(4 , 7) // arguments
addTwoNumbers(4 , "4")
addTwoNumbers("d" , 7)

// const result = addTwoNumbers(3, 7);

// console.log("Result:", result);

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result
}

const result = addNumbers(3, 7);

console.log("Result:", result);

function loginUserMessage(username){

    if (username === undefined){              // (!username)
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sonam"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());