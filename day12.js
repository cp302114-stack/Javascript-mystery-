// day12 : CHAPTER: classbacks , promises , async-await

/* Sync in JS
Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program. 
Each instruction waits for the previous instruction to complete its execution.


Asynchronous
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, 
which causes a delay in the UI. Asynchronous code execution allows to execute next instructions
 immediately and doesn't block the flow.*/

// example for Asynchronous

function hello(){
    console.log("hekllo");
}

setTimeout(hello,2000); // 2000 is in milisecods 2000ml = 2s so 
// the programm will exucete after 2 sec

// we can creat arrrow function also

setTimeout(() => {
    console.log("chiry");
}, 4000); // timeout


// another example
console.log("one");
console.log("two"); 

setTimeout(() => {
console.log("hello");
}, 4000); //timeout;


console.log("three");
console.log("four");

 // o/p 
// one , two,three,four the hello late due to timeout
// so we used the timeout function so its doesnt effect to next code for there 
//execution

/*Callbacks
A callback is a function passed as an argument to another function.*/

function sum(a,b){
    console.log(a+b);
}

function clasu(a,b,summm){
    summm(a,b);
}

clasu(1,3,sum);

// same for asynxhrons
const heloo= ()=>{
    console.log("hello");
};
setTimeout(hello, 3000);

/* Callback Hell
Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.*/

// ex 1 for call back function
function one(chiru , nextperson){
    setTimeout( ()=>{
        console.log("chiru");
        if(nextperson){
            nextperson();
        }
        
    } , 2000);
}

one(1, ()=>{
    one(2);
});

// ex 2

function getdata(dataid, getnextsdata){
    setTimeout(() => {
        console.log("data", dataid);
        if(getnextsdata){
            getnextsdata();
        }
    }, 4000);
}

getdata(1, ()=>{
    getdata(2 , ()=>{
        getdata(3, () =>{
            getdata(4);
        });
    });
});

// this is called callback hell you can see in the priveous code.
// so to solve this we use promises 

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("some error occurred");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            if (getNextData) {
                getNextData();
            }
            resolve(dataId);
        }, 2000);
    });
}


/*Promises
A JavaScript Promise object can be:
Pending: the result is undefined
Resolved: the result is a value (fulfilled)
resolve(result)
Rejected: the result is an error object
reject(error)
*Promise has state (pending, fulfilled) & 
some result (result for resolve & error for reject).


Promises
.then() &.catch()
promise.then((res) => { .... })
promise.catch((err)) => { .... })

*/

const getpro = () => {
    return new Promise((resolve, reject) => {
        console.log(" i am a pro");
        resolve("sucess");
    });
};

let getproo = getpro();
getproo.then(() => {
    console.log("pro successs");
});



function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some datal");
            resolve("success");
        }, 4000);
    });
}
console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});


// promise chain

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}
console.log("fetching data1");
let p11 = asyncFunc();
p11.then((res) => {
    console.log(res);
});

// promise chain

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    console.log("success");
  });

  // Async - Await 
  /*Async-Await
async function always returns a promise.
async function myFunc() {....}
await pauses the execution of
 its surrounding async function until the promise is settled.*/

// async-awite >> promise chain >> clallback-hell

// it returens a promise compalsary

async function chiruuu() {
    console.log("hello");
}

function api(){
    return new promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        } , 2000);
    });
}

async function getweather () {
    await api(1);
    await api(2); //2nd time
    await api(3);
    await api(4);
    await api(5);
    await api(6);
}


