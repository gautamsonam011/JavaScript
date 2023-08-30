// Array 

let marks = [91,82,63,85, false,"gmn"];
console.log(marks.length);
console.log(marks);
console.log(marks.slice(3));
marks[7] = 50;
console.log(marks) // we can add 
marks[0] = 100;
console.log(marks); // we can change element in array
console.log(typeof marks);


// Method Array Methods ----------------------->

// String Method

let num = [1,2,3,4,5];
let b = num.toString() // b is now a stirng
console.log(b);

// join method 

let c = num.join("and");
console.log(c ,typeof c);

// pop method 

let r = num.pop(); // pop returns the popped element
console.log(num, r)

// push method 

let r1 = num.push(78);
console.log(num , r1);

// shift method 

let r2 = num.shift(); // remove first element
console.log(num,r2);

// unshift method 

let x = num.unshift(100); // add element 
console.log(num, x);

// Delete operator 

let numb = [1,2,3,4,5,6,7,8];
delete numb[0];
console.log(numb);
console.log(numb.length);

// concat method 
let num_more = [13,4,65,76,77];
let newArray = num.concat(num_more);

console.log(newArray);
console.log(num, num_more);

// sort method 

let s = [1,4,3,67,43,8,79,34];
s.sort();
console.log(s);

let compare = (a,b) =>{
    return a -b
}
s.sort(compare)
console.log(s);

// reverse method 

s.reverse();
console.log(s);

// Splice Method 

let deleteValues = s.splice(2,3,1021,1022,1023);
console.log(s);
console.log(deleteValues)

// delete Values 

let newNum = s.slice(3);
console.log("New Num",newNum);
