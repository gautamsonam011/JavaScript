// Conditional Expressions --------------------> 

// let a = prompt("Hey!,What's up Guys!!")
// console.log(a)

// a = Number.parseInt(a) // converting the string to a number
// console.log(typeof a)

if(a>0){
    alert("This is a valid");
}
else{
    alert("This is an invalid");
}

// nested conditional 

age = 40;
if (age<0){
    alert("This is an invalid");
}
else if(age<9){
    alert("You are a kid");
}
else if(age<=18 && age >=9){
    alert("You can vote");
}
else{
    alert("This is a valid age above 18")
}

// Explore switch staement and write a basic program 

switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}

marks = 45;
console.log((marks>10) ? "Yes":"No");