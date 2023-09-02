console.log(console);

// asserts method 

console.assert(4>6);
console.assert(89>56);

console.assert;
// clear 

console.clear;

// table 
obj = {a:1, b:2, c:3};
console.table(obj);

// warn 
console.warn(obj);

// info 

console.info("Hey! this is an info");

console.log("log");
console.info("info");
console.warn("warn");
// error 

console.error("err");
console.assert("err" !=false);
console.assert("err" == false);

// time 

console.time("Time");

// timeEnd 
// forloop
console.timeEnd("TimeEnd");

console.time("forLoop");
for(let i = 0; i < 5; i++){
    console.log(233);
}
console.timeEnd("forLoop");

// whileloop 
console.time("whileLoop");
let i = 0;
while(i < 5){
    console.log(43);
    i++;
}
console.timeEnd("whileLoop");