class Pet {
  constructor(name, age) {
    console.log('PET CONSTRUCTOR');
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log('CAT CONSTRUCTOR');
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MEOWW!';
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOOF!';
  }
}

//super refers to the super class.
// the pet is the super class and Cat and Dog extends to Pet to reuse name and age.
// Good way of writing code, without duplicating.
