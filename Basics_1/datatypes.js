"use strict";// treat all js code as newer version

let age = 18;
let valuecorrect = true;


// 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null = standalone value
// unidentified
// symbol=> unique

// object

console.log(typeof null); // object

// summary

// Primitive 
// 7 types : numbers, string, boolean, null, undefined, symbol, BigInt

const score = 100; // (const variables have static storage duration for primitive types and reference types)

const userId = Symbol('123')
const anotherId = Symbol('123')
console.log(userId == anotherId);

// Reference (non primitive)
// array, object, function

const arr = ["user1", "user2", "user3"]; // array
let obj = {
    name : 'krishna',
    age : '18',
}

const func = function(){
    console.log("hello wold");
}