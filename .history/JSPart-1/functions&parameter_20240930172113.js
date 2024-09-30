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

function loginUserMessage(username){        // (username = "Sam")

    if (username === undefined){              // we can use (!username)
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sonam"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());


// ==============> Functions with objects and array ================>
    
// function calculateCartPrice(num1){
//     return num1;
// };

// console.log(calculateCartPrice(200));

// function calculateCartPrice(...num1){     //rest operator
//     return num1;
// };

// console.log(calculateCartPrice(200, 400,568, 900));


function calculateCartPrice(val1, val2, ...num1){     //rest operator
    return num1;
};

console.log(calculateCartPrice(200, 400,568, 900));

const user = {
    username: "Sonam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username:"Radha",
    price:588
})

const myNewArray = [400, 500,200,700];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue)