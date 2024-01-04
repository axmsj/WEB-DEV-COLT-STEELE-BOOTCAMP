// String.prototype.yell = function () {
//   return `${this.toUpperCase()}`;
// };

// Array.prototype.pop = function () {
//   return `I WAN THAT ELEMENT I WILL NEVER POP IT OFF`;
// };

// function hex(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(255, 255, 255);

function Color(r, g, b) {
  this.r = r;
  this.g = b;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}.${b}, ${a})`;
};

const color1 = new Color(30, 40, 50);
const color2 = new Color(64, 82, 198);

// function Word(text) {
//   this.text = text;
// }

// Word.prototype.firstWord = function () {
//   const { text } = this;
//   let firstWords = text.split(' ');
//   return firstWords[0];
// };

// const getFirstWord = new Word('Hello random words ehjasjfhsjdk dsjkfhsdjkhnf');
// const getSecondButFirstWord = new Word('sdjkhfnsjdk shdfjkhsdfj jsdhfjkhds');
