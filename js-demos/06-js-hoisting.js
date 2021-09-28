
// variable hoisting 

// console.log(num);
// let num = 10;

// don't go for this 
// var num = 10;
// num = 10;

// function hoisting 

// fun1(); // works  

// function fun1() {
//     console.log("fun1");
// }

fun2(); // doesn't work 

let fun2 = () => {
    console.log("fun2");
}

// not usable 
// var fun2 = () => {
//     console.log("fun2");
// }