

/* Event Listeners
node.addEventListener(event, callback)
node.removeEventListener(event, callback)
*Note: the callback reference should be same to remove */


// problems
// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curr= "light";

modeBtn.addEventListener("click", () =>{
    if (curr=== "light"){
        curr= "dark";
        body.classList.add("dark");
    } else{
        curr= "light"
        body.classList.add("light");
    }
    console.log(curr);

})