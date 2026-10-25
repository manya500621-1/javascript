"use strict";
let x = 10;
let y = 12;
console.log(`before swap:x=${x},y=${y}`);
let temp = x;
x = y;
y = temp;
console.log(`after swap:x=${x},y=${y}`);
