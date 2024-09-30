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

