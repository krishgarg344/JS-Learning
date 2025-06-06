// Dates

let birthdate = new Date()
console.log(birthdate.toString());
console.log(birthdate.toDateString());
console.log(birthdate.toISOString());
console.log(birthdate.toJSON());
console.log(birthdate.toLocaleDateString());
console.log(birthdate.toLocaleString());
console.log(birthdate.toLocaleTimeString());

let customDate = new Date(2026, 0, 26)
console.log(customDate.toDateString());

let customDate1 = new Date(2006, 7, 4, 6, 8, 57)
console.log(customDate1.toLocaleString());
console.log(customDate1.toDateString());