// 2. Cara Lain Dari Inheritance
class Human {
  gender = 'Max';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'Max';
  gender = 'Female';

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
