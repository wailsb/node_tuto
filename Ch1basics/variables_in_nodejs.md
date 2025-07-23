# Lesson: Variables in Node.js

In this lesson, we explore the three types of variable declarations in Node.js: `var`, `let`, and `const`.

## 1. `var` Variables
- Can be **redeclared** and **updated**.
- Are **function-scoped**, meaning they are accessible anywhere inside the function in which they are defined.

### Example:
```js
var x = 10;
var y = 20;
var x = 30; // Redeclaring is allowed
```

#### Function Scope Illustration:
```js
function example() {
    if (true) {
        var localVar = "I am local";
        console.log(localVar); // This will work
    }
    console.log(localVar); // This will also work
}
```

## 2. `let` Variables
- Can be **updated** but **not redeclared** in the same scope.
- Are **block-scoped**, meaning they are accessible only within the block they are defined in.

### Example:
```js
let z = 40;
// let z = 50; // ❌ Error: redeclaration not allowed
```

#### Block Scope Illustration:
```js
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // ✅ Works
}
// console.log(blockVar); // ❌ Error: blockVar is not defined here
```

## 3. `const` Variables
- Cannot be **updated** or **redeclared**.
- Are also **block-scoped** like `let`.

### Example:
```js
const a = 50;
// a = 60; // ❌ Error: assignment to constant variable
```

#### Constant Behavior Illustration:
```js
const constantVar = "I am constant";
// constantVar = "I cannot be changed"; // ❌ Error
```

## Running Code Example
Below is a full working example to test the differences between `var`, `let`, and `const`:

```js
//------------- VAR VARIABLES -------------
function varExample() {
    if (true) {    
        var a = 10;
    }
    console.log(a); // ✅ Works (function-scoped)
}

//------------- LET VARIABLES -------------
function letExample() {
    if (true) {    
        let b = 20;
        console.log(b); // ✅ Works (block-scoped)
    }
    // console.log(b); // ❌ Error: b is not accessible here
}

//------------- CONST VARIABLES -------------
const c = 30;

// Running functions to see the output
console.log("Var Example:");
varExample(); // Logs 10

console.log("Let Example:");
letExample(); // Logs 20

console.log("Const Example:");
console.log(c); // Logs 30
```

## How to Run
1. Save the above code in a file named `vars.js`.
2. Open your terminal.
3. Run the file using Node.js:
```sh
node vars.js
```

This will output:
```
Var Example:
10
Let Example:
20
Const Example:
30
```

---
This concludes the lesson on variables in Node.js. Next, we'll explore data types and operations.

