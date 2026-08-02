// day 4: chapter 4: Arrays 
// arrays are collection od items 

let marks=[12,44,98,56];
console.log(marks)  

// through indesx
marks[2];

// to update array 
marks[2]= 33;

// Looping over Array

// by for loop

let heros= ["ironman","thor","spiderman","hullk"];
for(let ind=0; ind < heros.length; ind++){
    console.log(heros[ind]);
}
 // by for-of-loop 

 for(let hero of heros){
    console.log(hero);
 }

 // Problems 
  // 1 to find avg in given array 

let marks = [85,34,66,78,98];
let sum = 0;

for(let mark of marks){
    sum+= mark / marks.length;

}

// 2. to change the array values a/c to given discount and 
// give the final values 

let items = [250,645,300,900,50];
let i=0;
  

for(let val of items){
let off = val/10;

items[i]-= off;
console.log("value after offer:", items[i]);
i++;
}


// arrays Methods  

let player=["virat", "ronaldo", "rohit", "messi", "neymar"];
player.push("mbappe");
let hero = ["batman","superman","aquaman"];
let dep= player.concat(hero);
console.log(dep);


player.pop();
console.log(player.toString());
player.unshift(king);


// for unshift


 let hero = ["hjb","fgy","uhg"];
let val = hero.shift();
console.log(val);

let player=["virat", "ronaldo", "rohit", "messi", "neymar"];
console.log(player.slice(1,5));


let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102); 
arr.splice(2,0,101); // add element
arr.splice(3,1); // delete element
arr.splice(2,1,5); // replace element

