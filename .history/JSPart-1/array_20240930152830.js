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