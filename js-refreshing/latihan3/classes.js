// 1. Class
// class Person {
//   constructor() {
//     this.name = 'Max';
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();

// 2. Inheritance
class Human {
  constructor() {
    this.gender = 'Max';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    this.gender = 'Female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
