let cost:number=6000;
let discount:number;
if(cost>=5000){
    discount=0.15;

}
else{
    discount=0.05;
}
discount=cost*discount;
let total:number=cost-discount;
console.log("total is:",total);