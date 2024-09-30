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

// Object.freeze(jsUser);

console.log(jsUser.name = "SG");

console.log(jsUser);


// function 

jsUser.greeting = function(){
    console.log("Hello JS user !!");
}

// console.log(jsUser.greeting);  undefined
// console.log(jsUser.greeting());  sUser.greeting is not a function

console.log(jsUser.greeting());
console.log(jsUser.greeting);  

jsUser.greetingTwo = function(){
    console.log(`Hello JS user: ${this.name}!!`);
}
console.log(jsUser.greetingTwo());  

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "2875jkdhs";
tinderUser.name = "Shiv";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sonam",
            lastname: "gautam"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "d", 4: "y"};

// const obj3 = {obj1, obj2};

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

// Object de-structure and JSON API intro 
