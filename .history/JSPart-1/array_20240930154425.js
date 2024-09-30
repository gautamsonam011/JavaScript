// array

const myArray = [0, 1, 2, 3, 4, 5];

console.log(myArray[0]);

const myFriends = ["Anjali", "Sonam", "Usha"];

const myArr = new Array(1,2,4,6,7);
console.log(myArr[0]);

// methods of array 

// myArr.push(8);
// myArr.push(10);
// myArr.pop();
myArr.unshift(11);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(newArr)

// slice and splice

console.log("A", myArr);

const myno = myArr.slice(1,3);

console.log(myno);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);

console.log("--------------------------");

const marvel_hers = ["thor", "ironman", "spiderman"];
const dc_hers = ["superman", "batman"];

marvel_hers.push(dc_hers);

console.log(marvel_hers);

console.log(marvel_hers[3][0]);

marvel_hers.concat(dc_hers);

console.log("B", marvel_hers);

const allHers = marvel_hers.concat(dc_hers);

console.log("C", allHers);

const all_new_hers = [...marvel_hers, ...dc_hers];

console.log("D", all_new_hers);

const another_array = [1,2,4,5,6,[7,5,4,3,6,[6,5,4]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Sonam"));
console.log(Array.from("Gautam"));
console.log(Array.from({name:"Sonam"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));