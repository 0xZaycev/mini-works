const Employee = {
    company: 'xyz'
};
const emp1 = Object.create(Employee);

delete emp1.company;

console.log(emp1.company);