// Falsy and Truthy values

// In JS, any variable can be treated as a boolean variable. 
// falsy values:  false, undefined, null, 0, NaN
// truthy values: any other value 

// test this - 
let ename; // take the value at runtime 
// ename = "Anjali";
// ename = 1046789;
ename = 0;

if (ename) {
    console.log("ename has truthy value.");
}
else {
    console.log("ename has falsy value.");
}


