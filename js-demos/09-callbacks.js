
// this refers to current context 

// let fun = () => {
//     console.log(this);
// }
// fun();

// functions are also objects in JS 

// let fun2 = () => {
//     console.log(`fun2`);
// }
// fun2();
// fun2.apply();

// let fun3 = (a) => {
//     console.log(a[0]);
// }

// let arr = [10, 20, 30];

// fun3(arr);


// let fun4 = (functionCall) => {
//     let num5 = functionCall + 10;
//     console.log(num5);
// }
// fun4(25);

// callback functions in JS 
let fun4 = (functionCall) => {
    console.log(`output from fun4`);
    functionCall(); // callback 
}
// callback function 
let someFunction = () => {
    console.log(`outout from someFunction`);
};

console.log(`start`);
fun4(someFunction);
console.log(`end`);





