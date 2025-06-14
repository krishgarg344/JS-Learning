let a = 300
if (true) {
    let a = 30
    const b = 20
    console.log("Inner a : ",a);
}

console.log(a);
// console.log(b);

function one(){
    const username = "userrr"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }

    // console.log(website);

    two()
}

one()

if (true) {
    const name = "user"
    if (name === "user") {
        const site = "youtube"
        console.log(name,""+ site);
    }
    // console.log(site);
}
// console.log(name);

console.log(addone(5));
function addone(num) {
    return num + 1
}
addone(5)

// console.log(addtwo(4));
const addtwo = function(num) { //also a function but also called expression
    return num  + 2
}
addtwo(4)
// here function is stored in a variable