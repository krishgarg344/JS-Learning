const langs = ["js", "cpp", "ruby"]
// langs.forEach(function (val){
//     console.log(val);
// })

// langs.forEach((key) => {
//     console.log(key);
// })

// langs.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
// }) 

const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99]
const val = nums.filter((key) => key > 40)
console.log(val);

// or

let newnums = []
nums.forEach( (key) => {
    if (key > 40) {
        newnums.push(key)
    }
})
// console.log(newnums);

newnums = nums.filter( (k) => {
    return nums > 30 && nums < 90
})
console.log(newnums);