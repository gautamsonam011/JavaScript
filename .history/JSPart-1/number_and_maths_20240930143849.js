const score = 4000;

console.log(typeof score);
console.log(score);
const balance = new Number(100);
console.log(balance);

//  methods of number

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber = 34.5678;

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));

const hunderd = 1000000;
console.log(hunderd.toLocaleString('en-IN'));

// ----------- Maths------------ 

console.log(Math);

// methods of maths 

// console.log(Math.abs(4));
// console.log(Math.abs(-5));
// console.log(Math.round(45.6));
// console.log(Math.pow());
// console.log(Math.ceil(5.6));
// console.log(Math.floor(45.6));
// console.log(Math.min(45.6, 6,5,7));
// console.log(Math.max(45.6, 6,5,7));

console.log(Math.random());
console.log(Math.random()*10 + 1);


