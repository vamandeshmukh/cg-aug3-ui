
// 1. basic way to declare a function 
function fun() {
    console.log("This is a basic function.");
}

fun();

// 2. use arrow function 
let fun2 = () => {
    console.log("This is an arrow function.");
}

fun2();

// let addTwo = (int a, int b) => {

let addTwo = (a, b) => {
    // console.log(typeof(a));
    // console.log(typeof(b));
    console.log(a + b);
}

addTwo(10, 20);
addTwo(10, 20, 30);
addTwo(10);
addTwo();
addTwo("No ", "Sir.");

