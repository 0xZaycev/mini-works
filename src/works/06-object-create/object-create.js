const Employee = {
    company: 'xyz'
};
const emp1 = Object.create(Employee);

delete emp1.company;

/**
 * Что выведется в консоль?
 * */

console.log(emp1.company);