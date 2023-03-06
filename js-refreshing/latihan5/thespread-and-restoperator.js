// 1. Menggunakan Variable
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// 2. Menggunakan Class Object
// const person = {
//   name: 'Mx',
// };
// const newPerson = {
//   ...person,
//   age: 28,
// };
// console.log(newPerson);

// 3. Menggunakan Arrow Function
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
