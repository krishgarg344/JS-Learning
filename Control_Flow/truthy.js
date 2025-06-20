const mail = ""

if (mail) {
    console.log("got an email");
}
else {
    console.log("Dont have an email");
}

// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// else all values are truthy including some of following

// truthy values :
// "0", 'false, " ", [], {}, function()

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // using Object.keys accesses keys of object as array and then wwe can operate .length on it
    console.log("empty Object");  
}

// Nullish Coalescing Operator (??): null undefined
// let val1 = 5 ?? 10
let val1 = null ?? 3
console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 80 ? console.log("greater than 80") : console.log("less than 80")