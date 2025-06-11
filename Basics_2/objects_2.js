// Singleton

const instaUser = new Object() // this ia a singleton object
// const instaUser = {}   // is non singleton object

instaUser.id = "userrr_ordinary"
instaUser.name = "user_1"
instaUser.isOnline = true

console.log(instaUser);

const regularUser = {
    email : "user123@gmail.com",
    fullname : {
        userfullname : {
            firstname : "user",
            lastname : "chan"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));

console.log(instaUser.hasOwnProperty('isOnline'));