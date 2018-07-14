// // Class Person
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };
//
// const person1 = new Person('Denis', 'Mescheryakov');
// const person2 = new Person('Ivan', 'Mescheryakov');
// const person3 = new Person('Maks', 'Mescheryakov');
//
// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person1.greeting());
// console.log(person2.greeting());
// console.log(person3.greeting());
//
// // Class Customer
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName); // this ->
//   this.phone = phone;
//   this.membership = membership;
// }
// // Наследуем прототип родителя
// Customer.prototype = Object.create(Person.prototype);
// // Вернем свойство constructor классу Customer
// Customer.prototype.constructor = Customer;
//
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// };
//
// const customer1 = new Customer('Ivan', 'Ivanov', '063-12-34-567', 'Standard');
// const customer2 = new Customer('Denis', 'Ivanov', '063-12-34-567', 'Standard');
//
// console.log(customer1);
// console.log(customer2);
// console.log(customer1.greeting());
// console.log(customer2.greeting());

// let obj = {
//   method: function () {
//
//   }
// };
//
// let obj1 = {
//   method() {
//
//   }
// };


// Class ES6
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('Denis', 'Mescheryakov');

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  greeting() {
    console.log(super.greeting());
  }
}


const customer1 = new Customer('Ivan', 'Ivanov', '063-12-34-567', 'Standard');


















