
// normal stuff 
// let fun = () => {
//     console.log(`fun message`);
// }
// fun();

// let fun = () => {
//     return `fun message` ;
// }
// console.log(fun());

// using timeout 
// problem with async programming 
// let fun = () => {
//     setTimeout(() => {
//         return { message: `fun message` };
//     }, 2000);
// }
// let getFun = fun();
// console.log(getFun.message); // error 

// solution 1 - use callback 
// let fun = (abc) => {
//     setTimeout(() => {
//         abc({ message: `fun message` }); // functioncall 
//     }, 2000);
// }
// let abc = (pqr) => {
//     console.log(pqr.message);
// }
// fun(abc);

// shortened version 
// let fun = (abc) => {
//     setTimeout(() => {
//         abc({ message: `fun message` }); // functioncall 
//     }, 2000);
// }

// fun((pqr) => {
//     console.log(pqr.message);
// });

// solution 2. using Promise
let fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let abc = true; // false;
            if (abc)
                resolve({ message: `fun message` });
            else
                reject();
        }, 2000);
    });
}

fun().then((xyz) => {
    console.log(xyz.message);
}).catch(() => { console.log(`Something is wrong!`) });

// solution 3 . async and await 

