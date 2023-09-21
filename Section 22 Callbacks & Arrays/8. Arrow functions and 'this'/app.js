const person = {
  firstName: 'Viggo',
  lastName: 'Mortensen',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

// you wouldn't use a arrow function to define a method
// You can use arrow function to use 'this' outside of the function scope

// !!!!!!!!! the keyword 'this' behave differently in an arrow function compared to a regular function !!!!!!
