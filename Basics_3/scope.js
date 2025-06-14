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