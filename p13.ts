let m:number=12;
let n:number=13;
console.log(`before swap:m=${m},n=${n}`);
m=m+n;
n=m-n;
m=m-n;
console.log(`after swap:m=${m},n=${n}`);