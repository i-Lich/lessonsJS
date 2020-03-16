// var value = Math.PI.toFixed(2);
// console.log(value);
"use strict";

let a = 10;
let numbers = [15, 11, 16, 12, 51, 12, 13, 51];
console.log(`Max = ${Math.max.apply(null, numbers)}`);
console.log(`Min = ${Math.min.apply(null, numbers)}`);