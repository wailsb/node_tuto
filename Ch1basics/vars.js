//variables in node js can be devided into 3 types
//1. var variables
var x = 10;
//   - can be redeclared and updated
var y = 20;
var x = 30; // redeclaring is allowed
//2. let just like var but with block scope
let z = 40;
//   - can be updated but not redeclared
// X wrong let z = 50; redeclaring is not allowed
//3. const just like let but with constant values
const a = 50;
//   - cannot be updated or redeclared
/*
more details explanation:
- var variables are function scoped, meaning they are accessible within the function they are declared in, or globally if declared outside any function.
exaample:
function example() {
    if (true) {
        var localVar = "I am local";
        console.log(localVar); // This will work
    }
    console.log(localVar); // This will also work, as var is function scoped
    }
- let variables are block scoped, meaning they are only accessible within the block they are defined in (e.g., inside a loop or an if statement).
example:
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // This will work
}
// cannot access blockVar here, it will throw an error

// - const variables are also block scoped like let, but they cannot be reassigned or redeclared.
// example:
const constantVar = "I am constant";
// constantVar = "I cannot be changed"; // This will throw an error
*/
// here is the actual code to run and see by yourself

//------------- VAR VARIABLES -------------
function varExample() {
    if(true){    
        var a=10;
    }
    console.log(a); // This will work, as var is function scoped

}
//------------- LET VARIABLES -------------
function letExample() {
    if(true){    
        let b=20;
        console.log(b); // This will work, as b is block scoped
    }
    // console.log(b); // This will throw an error, as b is not accessible here
    //uncomment the above line to see the error
}
//------------- CONST VARIABLES -------------
const c = 30;
// running functions to see the output
console.log("Var Example:");
varExample(); // This will log 10
console.log("Let Example:");
letExample(); // This will log 20
console.log("Const Example:");
console.log(c); // This will log 30

// to execute this code, save it in a file named vars.js and run it using node.js
// command: node vars.js