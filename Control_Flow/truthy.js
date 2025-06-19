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

if (Object.keys(emptyObj).length === 0) { // using Object.keys accesses keys as array and then wwe can operate .length on it
    console.log("empty Object");  
}
