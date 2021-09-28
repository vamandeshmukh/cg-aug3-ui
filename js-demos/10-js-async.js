
// async 

let fun = () => {
    console.log(`fun`);
}

console.log(`start`);
setTimeout(fun, 2000);
console.log(`end`);

