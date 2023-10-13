const a = 21;
const b = 24;
const c = 27;

const p = (a + b + c) / 2;

const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(result);