// day6 : CHAPTER: Document Object Model 

let button = document.getElementById("goat");
console.log(button);

let headings= document.getElementsByClassName("anime");
console.dir(headings);
console.log(headings);

let para = document.getElementsByTagName("p");
console.log(para);

let ele = document.querySelector("p");
console.dir(ele);

let cp= document.querySelector("#goat");
console.dir(cp);

 