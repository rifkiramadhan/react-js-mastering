// Example 1
// const number = 1;
// const num2 = number;
// console.log(num2);

// Example 2
const person = {
  name: 'Max',
};

const secondPerson = {
  ...person,
};
person.name = 'Manu';

console.log(secondPerson);
