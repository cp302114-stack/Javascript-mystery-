// day 2 chapter 2: operators and conditional statements
// today we will learn about
//1. operators
//2. conditional statements 


// to write a long comment in javascript, you can use the /* */ syntax. This allows you to write multiple lines of comments without having to use // for each line. For example:
/* This is a long comment
   that spans multiple lines */

// Operators in JavaScript
/* used to perform operations on values and variables and on data. 


1. Arithmetic operators: used to perform mathematical operations
a) Addition (+): adds two operands together. Example*/

let a = 10;
let b = 5;
let sum = a + b; // sum will be 15
console.log(sum);

//b) Subtraction (-): subtracts the second operand from the first operand. Example:
let difference = a - b; // difference will be 5
console.log(difference);

//c) Multiplication (*): multiplies two operands together. Example:
let product = a * b; // product will be 50
console.log(product);

//d) Division (/): divides the first operand by the second operand. Example:
let quotient = a / b; // quotient will be 2
console.log(quotient);

//e) Modulus (%): returns the remainder of the division of the first operand by the second operand. Example:
let remainder = a % b; // remainder will be 0
console.log(remainder);

//f) Exponentiation (**): raises the first operand to the power of the second operand. Example:
let power = a ** b; // power will be 100000
console.log(power);

//g) Increment (++): increases the value of the operand by 1. Example:
let c = 10;
c++; // c will be 11
console.log(c);

//h) Decrement (--): decreases the value of the operand by 1. Example:
let d = 10;
d--; // d will be 9
console.log(d);

// both increment and decrement called as unary operators because they operate on a single operand.

//2. Assignment operators: used to assign values to variables
/*a) Assignment (=): assigns the value of the right operand to the left operand. Example:*/
let x = 10; // x will be 10
console.log(x);

//b) Addition assignment (+=): adds the value of the right operand to the left operand and assigns the result to the left operand. Example:
x += 5; // x will be 15
console.log(x);

//c) Subtraction assignment (-=): subtracts the value of the right operand from the left operand and assigns the result to the left operand. Example:
x -= 5; // x will be 10
console.log(x);

//d) Multiplication assignment (*=): multiplies the left operand by the value of the right operand and assigns the result to the left operand. Example:
x *= 5; // x will be 50
console.log(x);

//e) Division assignment (/=): divides the left operand by the value of the right operand and assigns the result to the left operand. Example:
x /= 5; // x will be 10
console.log(x);

//f) Modulus assignment (%=): takes the modulus of the left operand by the value of the right operand and assigns the result to the left operand. Example:
x %= 3; // x will be 1
console.log(x);

//like that we can do for exponentiation assignment (**=) and so on.
x **= 2; // x will be 1

//3. Comparison operators: used to compare two values and return a boolean value (true or false)
/*a) Equal to (==): returns true if the operands are equal. Example:*/

let e = 10;
let f = 10;
console.log(e == f); // will return true

//b) Not equal to (!=): returns true if the operands are not equal. Example:
console.log(e != f); // will return false

//c) Strict equal to (===): returns true if the operands are equal and of the same type. Example:

let g = "10";
console.log(e === g); // will return false because e is a number and g is a string

//d) Strict not equal to (!==): returns true if the operands are not equal or not of the same type. Example:
console.log(e !== g); // will return true because e is a number and g is a string

//e) Greater than (>): returns true if the left operand is greater than the right operand. Example:
console.log(e > f); // will return false

//f) Less than (<): returns true if the left operand is less than the right operand. Example:
console.log(e < f); // will return false

//g) Greater than or equal to (>=): returns true if the left operand is greater than or equal to the right operand. Example:
console.log(e >= f); // will return true

//h) Less than or equal to (<=): returns true if the left operand is less than or equal to the right operand. Example:
console.log(e <= f); // will return true

//4. Logical operators: used to combine multiple boolean expressions and return a boolean value
/*a) Logical AND (&&): returns true if both operands are true. Example:*/
let a=6;
let b=7;
console.log(a > 5 && b > 5); // will return true because both conditions are true

// conditional statements in JavaScript

//1. if statement: used to execute a block of code if a specified condition is true. Example:

 let age = 18;
 if (age >= 18){
      console.log("You are an adult.");
 }

 if (age < 18){
      console.log("You are a minor.");
   }

   //2 example of if else statement

   let mode= "dark";
   let color;

   if (mode === "dark"){
         color = "black";
            } 
            else {
         color = "white";

   }

   //3. else if statement: used to specify a new condition to test if the previous condition is false. Example:

   let score = 85;
   if (score >= 90){
         console.log("Grade: A");
   } else if (score >= 80){
         console.log("Grade: B");
   } else if (score >= 70){
         console.log("Grade: C");
   } else if (score >= 60){
         console.log("Grade: D");
   } else {
         console.log("Grade: F");
   }

   // ternary operator: a shorthand for the if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. Example:
   let isMember = true;
   let discount = isMember ? 0.1 : 0; // if isMember is true, discount will be 0.1, otherwise it will be 0

  // switch statement: used to perform different actions based on different conditions. Example: 
      let day = "Monday";
      switch (day) {
            case "Monday":
                  console.log("Today is Monday.");
                  break;
            case "Tuesday":
                  console.log("Today is Tuesday.");
                  break;
            case "Wednesday":
                  console.log("Today is Wednesday.");
                  break;
            case "Thursday":
                  console.log("Today is Thursday.");
                  break;
            case "Friday":
                  console.log("Today is Friday.");
                  break;
            case "Saturday":
                  console.log("Today is Saturday.");
                  break;
            case "Sunday":
                  console.log("Today is Sunday.");
                  break;
            default:
                  console.log("Invalid day.");
      }

      // problems

     // 1. take user input for a number and check if it is divided by 5 or not
     let n= prompt("enter a number");
      if (n % 5 === 0){
            console.log(n + " is divisible by 5.");
      } else {
            console.log(n + " is not divisible by 5.");
      }