const num = new Number(800)
console.log(num.toString().length);

const num1 = 27.990903
console.log(num1.toPrecision(1));
console.log(num1.toPrecision(2));
console.log(num1.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//*****************************************MATHS********************************************

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(2.9));
console.log(Math.ceil(5.1));//ceil : a slight higher than whole value will lead to succssesive whole number
console.log(Math.floor(4.9));//floor : even if a slightly higher than whole value will lead to predecessor whole number
console.log(Math.min(2,4,1,0,34));
console.log(Math.max(2,4,1,0,34));

console.log(Math.random());

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
