let x:number=10;
let y:number=12;
console.log(`before swap:x=${x},y=${y}`);
let temp:number=x;
x=y;
y=temp;
console.log(`after swap:x=${x},y=${y}`);