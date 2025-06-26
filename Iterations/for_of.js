// For Of

// ["", "", ""]
// [{}, {}, {}]

const arr = [10, 20, 30, 40, 50]
// for (const i of arr) {
//     console.log(i);
    
// }

const greet = "Heyy How u doing"
for (const g of greet) {
    console.log(g);
}

// Maps

const x = new Map()
x.set('IN', 'India')
x.set('UK', 'United Kingdom')
x.set('SA', 'South Africa')
x.set('IN', 'India')
console.log(x);// Always contains unique values

for (const [key, value] of x) {
    console.log(key, ':-', value);
}

const Obj = {
    game1 : 'NFS', 
    game2 : 'GTA V',
    game3 : 'COD'
}

// for (const key of Obj) {
//     console.log(key);
// } objects are not iterable

// for in 
for (const key in Obj) {
   console.log(key, ":-", Obj[key]);
}
const lang = ["js", "css", "cpp", "c"]
for (const key in lang) {
    console.log(lang[key]);
}