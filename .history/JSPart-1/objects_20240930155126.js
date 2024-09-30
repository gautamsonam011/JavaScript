// singleton 
// Object.create 

// object literals 

const mySym = Symbol("key");

const jsUser = {
    name: "Sonam",
    age: 20,
    location: "Unnao",
    email: "navyal@gmail.com",
    mySym: "myKey"
}

console.log(jsUser.email);
console.log(jsUser["email"])

