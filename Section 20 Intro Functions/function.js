// Functions with multiple arguments

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}.`);
// }

// function repeat(str, numTimes) {
//   let result = '';
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

//The Return Keyword

// Return - Built - in methods return values when we call them. We can store those values.

// The return statement ends function execution AND specifies the value to be returned by that function.

// function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     return false;
//   }
//   return x + y;
// }

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function capitalize(firstIndex) {
//   let newIndex = firstIndex[0].toUpperCase();
//   let firstLetterRemoved = firstIndex.slice(1);
//   return newIndex + firstLetterRemoved;
// }

// let dayOfWeek = [
//   '',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];
// function returnDay(num) {
//   if (num >= 1 && num <= 7) {
//     return dayOfWeek[num];
//   } else {
//     return null;
//   }
// }
