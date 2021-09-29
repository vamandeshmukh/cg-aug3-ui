
class Employee {
    
    firstName = 'Sonu';
    phone = 9876543210;

    work = () => {
        console.log(`Employee works...`);
    }
    work2() {
        console.log(`Employee works... 2`);
    }
}

// Employee emp = new Employee(); X 
let emp = new Employee();
console.log(emp.firstName);
emp.work();
emp.work2();


