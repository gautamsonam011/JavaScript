"use strict" // treat al js code as newer version

// alert (3+3) // we are using nodejs, not browser

const a = 3;
const b = 6;

console.log(a+b);

let x = 35;
let y = 67;
let z = x-y;
console.table([x, y, z]); // code readability should be high

let name = "Sonam Gautam";
let age = 45;
let isLoggedIn = false;

// number => 2 to power 53
// bigint used for long value
// string
// boolean => true/false
// null  => standalone value let state = null';
// undefined => let state;
// symbol => unique


// object 

console.log(typeof "Sonam Gautam");

let state = null;

console.log(typeof state);

// Primitive 
// 7 types: String, Number, Boolean, null , undefined, symbol and BigInt.

const score = false

console.log(score);

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);
// Reference (Non primitive)

// Array, Objects, Functions

