console.log(Math.PI);

//=====================

const a = 5;
const b = 10;
const c = -1;
const d = 0;
const e = 16;

const arr = [20, 30, 40];

// console.log(Math.max(a, b, c, ...arr));
// console.log(Math.min(a, b, c, ...arr));

console.log(Math.sign(a));

console.log(Math.pow(a, 4)); // exponentiation (5^4)

console.log(Math.sqrt(e)); // square root √

console.log(Math.floor(1.156), Math.floor(1.556), Math.floor(1.956));
console.log(Math.ceil(1.156), Math.ceil(1.556), Math.ceil(1.956));
console.log(Math.round(1.156), Math.round(1.556), Math.round(1.956));
console.log(Math.trunc(1.156), Math.trunc(1.556), Math.trunc(1.956));

//==============
const randon = Math.trunc(Math.random() * 10) + 1; // add + 1 = 1-10, without = 0-10

console.log(randon);

//===================

console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));
