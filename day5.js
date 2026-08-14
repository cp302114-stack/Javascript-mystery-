// day 5: chapter 5: Functions and its methodes

// function is a block of code which perform specific task

// syntax of function 

function hello(){
    console.log("i am chiranth");
}

hello();

 

// type 2

function myfunction(msg){
    console.log(msg);
}
myfunction("i Love jS");

// to calulate sum

function sum(a,b){
    add= a+b;
    console.log(add); // here we can use returen also 
}

sum(4,19);

// what variable comes under function they are local variable

// Arrow Functios
const s = (a,b) => {
    console.log(a+b);
};

s(3,4);

// Problems 
//1) using functions creat a fuction to count number of vowels present in string

function countvowels(str){
    let count = 0;
    for (const char of str){
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++;
        }
    }

    console.log(count);


}

countvowels("abcdef");


// 2) same problem in arrow fumction 

const countvowel=(str) =>{
     let count = 0;
    for (const char of str){
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ){
            count++;
        }
    }

    console.log(count);


}

countvowels("abcdef");

// for each loop

// syntax --> arr.forEach(callbackfunction);

//eg:

let arr=[,2,3,4,5];
arr.forEach(function printvalu(val){
    console.log(val)
});

// in forecach loop we can use arrow function also and this is higher order function[HOF] 

// problems 

// 1 to print each array vaue its squre using foreachloop 

let arr = [1,2,34,4,5,6];

arr.forEach(function squre(num){
    console.log(num*num);
}); 




//    or method 2 

function squre(num){
    console.log(num*num);
}

arr.forEach(squre);


// arry methodes 
let a= [1,2,345,5,6,];
a.map(function num(val){
    console.log(val);
});

// by using map we can also creat new array

let a= [1,2,345,5,6,];
let newArr = a.map(function num(val){
    console.log(val);
}); 

// method 2. filter method 

let a=[1,2,3,4,5,6,7];
a.filter((val)=> {
    return val % 2 == 0;
});

// 3. reduce method

let a= [1,2,3,4];
const n = a.reduce(function fil(res, curr){
    return res + curr;
})

console.log(n);

// to find big number
let a= [1,2,3,4];
const n = a.reduce(function fil(res, curr){
    return res > curr? res : curr;
})

console.log(n);

// problems 
// 1. filter marks 

let marks=[90,99,76,87,98,91,86];

let topper= marks.filter((val) =>{
    return val > 90;
});

console.log(topper);

// 2 to store valure in new array and reduce it add them all

let n = prompt("enter a number :");

let a = [];
 
for(let i=0; i<=n; i++){
    a[i-1]= i;
}

console.log(a);

let summ = a.reduce((res, curr) =>{
    return res + curr;
})

console.log(sum);


// 3. factorial 

function Fcatorial(n){ 
    let fact = 1;
    for (let i=1; i<=n; i++){
         fact *=i;
    }

    console.log(fact);
}

Fcatorial(5);