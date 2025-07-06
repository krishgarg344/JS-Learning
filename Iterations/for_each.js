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
// const val = nums.filter((key) => key > 40)
// console.log(val);

// // or

// let newnums = []
// nums.forEach( (key) => {
//     if (key > 40) {
//         newnums.push(key)
//     }
// })
// // console.log(newnums);

// newnums = nums.filter( (k) => {
//     return nums > 30 && nums < 90
// })
// console.log(newnums);

// Map

const newnums = nums
                    .map( (key) => key * 10)
                    .map( (key) => key + 1)
                    .filter( (key) => key >= 400)

console.log(newnums);

const int = [1, 2, 3]

// const sum = int.reduce(function (acc, curr) {
//     console.log(`accumulator : ${acc} and current value : ${curr}`);
//     return acc + curr
// }, 0)

const sum = int.reduce((acc, curr) => acc + curr, 0)

console.log(sum)

