console.log("Javascript Variables:- var, let and const")

var a = 45;
var a = "p";
var b = "kjfdsn";
var c = null;
var d = undefined;

// var is a global variable , var re-declare and re-asign
{
    var s = "This";
    console.log(s);
}
console.log(s)

// let is a local variable, Re-asign and Not Re-declare
{
    let a = 60;
    console.log(a);
}
console.log(a);

let z = "fdm";
z = 45;
// let z = "kddf"
console.log(z);

// const not re-asign and not re-declare

const author = "Ram";
// let author = "fkdsm";  Error Identifier 'author' has already been declared

// author = 45; Error Assignment to constant variable 