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

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b}, ${a})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);

const body = document.querySelector('body');

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  fullSaturation() {
    const { h, l } = this;
    return `hsl(${h},100%, ${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    // Assign h, s, l to the object instance so that we can reuse it.
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
const orange = new Color(230, 126, 34, 'carrot');

class Car {
  constructor(make, model, year, djhsj) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  make() {
    return `${make}`;
  }
  model() {
    return `The model of the vehicle is ${this.model} `;
  }
  year() {
    return `The car was made in ${this.year}`;
  }
  makeModelYear() {
    const { make, model, year } = this;
    return `The make of the vehicle is ${this.make}, and model is ${this.model}, year: ${this.year}`;
  }
}

const firstCar = new Car('Subaru', 'WRX', 2017);
const secCar = new Car('Dodge', 'Charger SRT', 2023);

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
