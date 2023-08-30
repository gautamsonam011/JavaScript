// What will the following print in javascript console.log("nor\"".length)

let str = "Hey\"";
console.log(str.length);

// Explore the includes, startsWith and endsWith function of a string.
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'jumps';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`);

// 3:- Write a program to convert a given string to lowercase. 

str = "Hey Guys";
console.log(str.toLowerCase());

// 4:- Extract the amount out of this string "Please give Rs 1000". 

let str2 = "Please give Rs 1000";

let amount = str2.slice(15);
console.log(amount);
console.log(typeof amount);

// 5:- Try to change 4th character of a given string were you able to do it. 

let friend = "Deepika";
friend[3] = "R";
console.log(friend)  //friend is not changed, because string is immutable