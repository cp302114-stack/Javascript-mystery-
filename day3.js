// day 3: chapter 3: loops and strings
for(let i = 0; i < 5; i++){
        console.log("chiru");
}

for(let count=1; count <= 10; count++){
        console.log(count);
}

// to calculate the sum of first 10 natural numbers
let sum = 0;
for(let i = 1; i <= 10; i++){
        sum += i; // sum = sum + i
        console.log(sum); 
}

//while loop

let i=1;
while(i <= 5){
        console.log(i);
        i++;
}


// for - of loop

let str="chiru";
for(let i of str ){
        console.log("i=",i)  // o/p = i = c , i=h,............
}


// how to cal size of string

let size=0;
for(let i of str ){
        console.log("i=",i)  // o/p = i = c , i=h,............
        size++

}

console.log=(size) 

// for-in loop

let stu={
        name:"goat",
        age=23,
        cgpa=9.1,

        isPass: true,
};

for (let i in stu){
        console.log(i);
}


// PROBLEMS 
//1. to print even nums from 1 to 100

for (let n=0; n<=100;n++){
        if(n%2== 0){
                console.log("num=",n)
        }
}

// 2. GAME

let gussee= 45;
let username= prompt("enter a number:");
console.log(username);

while(username != gussee){
        username= prompt("wrong , enter again");
}

console.log("perfect , YOU WON")


// STRINGS

let name="chiru";
console.log(name[2]);

console.log(name.length())

// template literals 
let tl= `the goat of cricket is vk`

let obj={
        item:"pen",
        price:10,


} ;

let out=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(out)

// for new line we use \n and for new tab we use \t

// string methodes                                     

let str="chiru the devloper ";
let str2="and cr, vk18 also"
str.toUpperCase() ;
str.toLowerCase();
str.trim();   // trim the spaces present in string
str.slice(1,6);
str.concat(str2); 
str.replace(Chiru, chiranth);
str.charAt(5);



// PROBELEMS 

// 1. prompt the user to enter their full name . genrate 
// output with @ and end fullname length 
  // solution 

  let name = prompt("enter your name :");
  let user= "@" + name + name.length;
  console.log(user);