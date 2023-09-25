const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

Math.max(...nums); // NaN
Math.min(...nums); // 53456

//spread arrays and copy

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];
//order matter when combining arrays with spread

//spread a string too

// [..."hello"] = ['h', 'e', 'l', 'l', 'o']

//spread with object
//   copies properties from one object into another object literal.

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'ccaninae' };

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'tobias123!',
  username: 'tfunke',
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
