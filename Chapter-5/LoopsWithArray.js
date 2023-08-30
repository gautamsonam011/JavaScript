let num = [3,2,5,4,34];

for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}

// forEach loop 

num.forEach((element) =>{
    console.log(element*element);
})

// Array From 
let name = "Shivika";
let arr = Array.from(name);
console.log(arr);

// for in loop 

for (let i in num){
    console.log(num[i]);
}

// for of loop 
for (let item of num){
    console.log(item);
}
