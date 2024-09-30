const accountId = 657843;
let accountEmail = "gautam7864@gmail.com";
var accountPsw = "8468jcn";
accountCity = "Unnao Uttar Pradesh";
let accountState;

// accountId = 83746 not re-assign

// accountEmail = "sonam74865@gamil.com"; re-assign 

// accountPsw = "847638"; re-assign 

console.log(accountId);
console.log(accountEmail);
console.log(accountPsw);
console.log(accountCity);

accountEmail = "sonam74865@gamil.com"; 
accountPsw = "847638";
accountCity = "Unnao UP";

console.table([accountId, accountEmail, accountCity, accountPsw,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// const accountId = "39647"; not re-declare
// let accountEmail = "sbjgh03874@gmail.com"; not re-declare 

// var accountPsw = "4783hd"; re-declare