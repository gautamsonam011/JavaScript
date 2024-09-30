// Dates 

let myDate = new Date();
console.log(myDate);

//  Methods of date
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23);
// let myCreateDate = new Date(2024, 0, 23, 5, 3);

// let myCreateDate = new Date("2024-01-23");
let myCreateDate = new Date("01-14-2024");

console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());