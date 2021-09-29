
// JS objects 

let fun = () => { console.log(`fun`); }
function fun2() { console.log(`fun`); }

console.log(`Basic JS Objects --- `);

let myBio = {
    firstName: 'Vaman',
    phone: 987654310,
    isIndian: true,
    interests: ['Reading', 'Workout', 'Travelling'],
    skills: {
        programming: 'Java',
        database: 'Oracle'
    }
};

let anotherBio = myBio; // backend - springboot REST API 

console.log(myBio.phone);
console.log(myBio.skills.database);
console.log(myBio.interests[2]);
console.log(myBio);

console.log(anotherBio.phone);

