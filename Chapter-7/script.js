// // Walking the DOM (Document Object Model) 
// // How to move or connect with html, css, and js  
// document.getElementById("h1").style.color = "red";

// // Accessing Children of an Element in DOM.

// // How to access children element in DOM ?

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);

// // Parents & Siblings of an Element 

// // $0 used for mark tag 
// a = document.body.firstChild
// console.log(a.parentNode);
// console.log(a.parentElement);
// console.log(a.firstChild.nextSibling);

// // Element only Navigation 

// const changeBodyRed = ()=>{
//     document.body.firstElementChild.style.background= "red";
// }
// let b = document.body;
// console.log("First child of b is:",b.firstChild);
// console.log("First Element child of b is:",b.firstElementChild)

// let t = document.body.firstElementChild.firstElementChild

// console.log(t);
// console.log(t.rows);
// console.log(t.caption);
// console.log(t.thead);
// console.log(t.caption);
// console.log(t.tfoot);
// console.log(t.tBodies);
// console.log(t.rows[0].rowIndex);

// Matches, Closest and Contains 

let e1 = document.getElementById("e1");
console.log(e1);
// matches 
console.log(e1.matches(".class"))
console.log(e1.matches(".box"))
// closest 
console.log(spn1.closest("#spn1"))
console.log(spn1.closest(".box"))
// contains 
console.log(e1.contains(spn1));
console.log(spn1.contains(spn1));
console.log(e1.contains(e2));