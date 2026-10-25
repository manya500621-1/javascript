"use strict";
let cost = 6000;
let discount;
if (cost >= 5000) {
    discount = 0.15;
}
else {
    discount = 0.05;
}
discount = cost * discount;
let total = cost - discount;
console.log("total is:", total);
