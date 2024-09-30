// singleton 
// Object.create 

// object literals 

const mySym = Symbol("key");
const mySym1 = Symbol("Key1")

const jsUser = {
    name: "Sonam",
    age: 20,
    location: "Unnao",
    email: "navyal@gmail.com",
    mySym: "myKey",
    [mySym1]: "myKey1"
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym1]);

console.log(jsUser.email = "navtl@gmail.com");

Object.freeze(jsUser);

console.log(jsUser.name = "SG");

console.log(jsUser);


// function 

jsUser.greeting = function(){
    console.log("Hello JS user !!");
}

console.log(jsUser.greeting);
// console.log(jsUser.greeting());  sUser.greeting is not a function

