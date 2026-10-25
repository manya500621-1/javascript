"use strict";
let marks = 85;
let grade;
if (marks > 80 && marks < 100) {
    grade = "A";
}
else if (marks > 60 && marks < 80) {
    grade = "B";
}
else {
    grade = "C";
}
console.log(`marks:${marks}`);
console.log(`grade is:${grade}`);
