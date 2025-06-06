// Stack (primitive), Heap (non primitive)

let myname = "mr. ayz"
let yourname = myname
yourname = "raju"
console.log(myname)
console.log(yourname)

let userone = {
    email : "user@gmail.com",
    upi : "one@Ybl"
}
let usertwo = userone
usertwo.email = "kris@gmail.com"
console.log(userone.email);
console.log(usertwo.email);