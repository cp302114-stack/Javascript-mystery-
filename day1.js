// day 1 chapter 1: introduction to javascript  [ date: 17/05/2026]
//  today we will learn about
// 1. variables
//2. data types



// problem 1

const products = {
    title: "ball pen",
    price: 10,
    rating: 4.5,
    offer:5
};
console.log(products);

// problem 2

    const profile = {
        username: "chintu",
        isFollow: false,
        followers: 1000,
        following: 500
    };
    console.log(profile);



    // key words
    //1. const: it is used to declare a variable that cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. However, if the value is an object or an array, the properties of the object or the elements 
    //2. let: it is used to declare a variable that can be reassigned. It allows you to change the value of the variable after it has been declared. Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in.
    //3. var: it is used to declare a variable that can be reassigned. However, var has function scope, meaning it is accessible throughout the entire function in which it is declared, regardless of block scope. Variables declared with var are hoisted to the top of their scope, which can lead to unexpected behavior if not used carefully.
    // example for key words

    const name = "chintu";

    // data types in javascript
    //1. string: it is used to represent textual data. It is enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: "Hello, World!"
    //2. number: it is used to represent numeric values, including integers and floating-point numbers. Example: 42, 3.14
    //3. boolean: it is used to represent a logical value that can be either true or false. Example: true, false
    //4. null: it is used to represent the intentional absence of any object value. It is a primitive value that represents "no value" or "empty value". Example: null
    //5. undefined: it is used to represent a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value. Example: undefined
    //6. object: it is used to represent complex data structures that can contain multiple properties and values. Objects are defined using curly braces ({ }) and can have key-value pairs. Example: { name: "chintu", age: 25 },
    //7. BigInt: it is used to represent integers that are larger than the maximum safe integer value in JavaScript. It is denoted by appending "n" to the end of the number. Example: 9007199254740991n


// rules for naming variables
//1. variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
//2. variable names can contain letters, numbers, underscores, and dollar signs, but cannot contain spaces or special characters.
//3. variable names are case-sensitive, meaning that "myVariable" and "myvariable" are considered different variables.
//4. variable names should not be reserved keywords in JavaScript, such as "var", "let", "const", "if", "else", etc.


// type casting: it is the process of converting a value from one data type to another. In JavaScript, you can perform type casting using built-in functions or operators.
// example of type casting
// converting a string to a number
const str = "42";
const num = Number(str);

// how to connect javascript to html
// to connect javascript to html, you can use the <script> tag in your HTML file. You can either include the JavaScript code directly within the <script> tag or link an external JavaScript file using the src attribute. For example:
// <script>
//   // Your JavaScript code here
// </script>
// or
// <script src="path/to/your/javascript/file.js"></script> after the body tag in html file.
