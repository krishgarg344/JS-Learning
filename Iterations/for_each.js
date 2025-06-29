const langs = ["js", "cpp", "ruby"]
// langs.forEach(function (val){
//     console.log(val);
// })

langs.forEach((key) => {
    console.log(key);
})

langs.forEach( (val, index, arr) => {
    console.log(val, index, arr);
})