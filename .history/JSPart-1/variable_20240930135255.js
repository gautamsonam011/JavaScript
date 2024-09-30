const accountId = 657843;
let accountEmail = "gautam7864@gmail.com";
var accountPsw = "8468jcn";
accountCity = "Unnao Uttar Pradesh";
let accountState;

// accountId = 83746 not re-assign

// accountEmail = "sonam74865@gamil.com"; re-assign 

// accountPsw = "847638"; re-assign 

console.log(accountId);
console.log(accountEmail);
console.log(accountPsw);
console.log(accountCity);

accountEmail = "sonam74865@gamil.com"; 
accountPsw = "847638";
accountCity = "Unnao UP";

console.table([accountId, accountEmail, accountCity, accountPsw,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// const accountId = "39647"; not re-declare
// let accountEmail = "sbjgh03874@gmail.com"; not re-declare 

// var accountPsw = "4783hd"; re-declare


const name = "Sonam";
const repoCount = 40;

console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const myName = new String('Sonam Gautam');


// Methods 

console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toLocaleUpperCase());
console.log(myName.charAt(4));
console.log(myName.indexOf('G'));

// Slice

const newString = myName.substring(0, 4);
console.log(newString);

const anotherString = myName.slice(-4, 2);
console.log(anotherString);

const newStringOne = "   Sonam  ";
console.log(newStringOne);
console.log(newStringOne.trim());     // trim use for space remove 

const url = "https://shjd.com/sdjfgj";

console.log(url.replace('j', '-'));
console.log(url.includes('sundar'));

console.log()