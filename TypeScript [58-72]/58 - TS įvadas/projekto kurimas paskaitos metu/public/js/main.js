import { a, b } from './numbers.js';
const addMany = (...args) => args.reduce((s, x) => s + x);
console.log(addMany(a, b));
console.log(addMany(a, b, b));
console.log(addMany(4, 1, 5, 6, 7));
