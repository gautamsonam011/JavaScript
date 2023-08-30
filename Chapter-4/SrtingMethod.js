let name = "Priyanka";
// length 

console.log(name.length);

// upper case 

console.log(name.toUpperCase());

// lower case 

console.log(name.toLowerCase());

// slice 

console.log(name.slice(2,4));
console.log(name.slice(2));

// Replace 

console.log(name.replace("Pri","R"));

// concat 

let friend = "Naman";
console.log(name.concat("is a friend of", friend, "ok"));

let friend2 = "   Meena   ";
console.log(friend2)
console.log(friend2.trim())

let fr = "Shivika";
console.log(fr[0]);

// Use a for loop to print a string 

for (i = 0; i < fr.length; i++){
    console.log(i);
    i++;
}

// String replaceAll()

console.log(fr.replaceAll("Shivika","Reaha"));

// substring 

let str = "Apple, Boot, Kiwi"
console.log(str.substring(2,13));

// substr 

console.log(str.substr(3,8));