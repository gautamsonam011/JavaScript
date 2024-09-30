//  ==========> Stack and Heap memory in javascript <=========

// Stack (Primitive), Heap (Non-Primitive) 

let myname = "Sonam Gautam";
let anothername = myname;

anothername = "SG";

console.log(myname);
console.log(anothername);

let userOne = {
    email: "gautam098@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ghfjd09374@gmail.com";

console.log(userOne.email); 
console.log(userTwo.email);


// Stack memory provide copy of original value and heap provide reference of original value 
