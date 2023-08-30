// Higher Order Array Methods 
// Map, Reduce, Filter 
// forEach(value,index, array)

let arr = [34,24,54];
// let a = arr.map((value) =>{
//     console.log(value);
//     return value+1;
// })
// console.log(a);

// let a = arr.map((value,index,array) =>{
//     console.log(value,index,array);
//     return value+1;
// })
// console.log(a);

// Array filter method 

let arr2 = [45,32,21,0,5,7];
let a2 = arr2.filter((a) =>{
    return a<10;
})
console.log(a2);

// Reduce Method 

let arr3 = [1,2,3,5,4,1];
// let newarr3 = arr3.reduce((h1,h2) =>{
//     return h1+h2;
// })
// console.log(newarr3);

const reduce_func = (h1,h2) => {
    return h1+h2;
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);