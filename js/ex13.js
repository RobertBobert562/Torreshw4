let x = 7;
let y = 8;

function myFunction(x) {
    console.log(`x = ${x}`);
    x = 10;
    return x;
    
}

console.log(`x = ${x}`);
console.log(`y = ${y}`);
x = myFunction(y);
console.log(`x = ${x}`);
console.log(`y = ${y}`);
