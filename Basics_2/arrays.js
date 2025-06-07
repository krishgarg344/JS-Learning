// Arrays

const arr = [2, 32, 45, "arav", "arnav"]
console.log(arr["2"] !== arr["02"]);
console.log(arr["2"]);

const fruits = [];
fruits.push("apple", "banana", "kiwi");
console.log(fruits.length);

// Array methods

const myheros = ["tony stark", "steve rogers", "natasha", "dr banner"]
myheros.push("peter parker")
console.log(myheros);
myheros.pop()
console.log(myheros);

// slice, splice

console.log("A ", myheros);
const arr1 = myheros.slice(1, 3)
console.log(arr1);

console.log("B ", myheros);
const arr2 = myheros.splice(1, 3)
console.log(arr2);
console.log(myheros);


const trash = myheros.concat(fruits)
console.log(trash);
