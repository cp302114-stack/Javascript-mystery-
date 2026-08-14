// day7 : CHAPTER: Document Object Model  part-2
// insert elements 

// how to append 

let newBtn = document.createElement("button");
newBtn.innerText= "click";
let div = document.querySelector("div");
div.append(newBtn);

// how to add any text or heading

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> hi </i> ";

document.querySelector("body").prepend(newHeading);

// hoe to remove a element

let para = document.querySelector("p");
para.remove();

newBtn.remove();

// append child :-The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.

// syntax
appendChild(child)

// eg:-

// Create a new paragraph element, and append it to the end of the document body
const p = document.createElement("p");
document.body.appendChild(p);

// remove child :- The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.
removeChild(child)

// eg:-
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);

// problems

// 1. Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);

