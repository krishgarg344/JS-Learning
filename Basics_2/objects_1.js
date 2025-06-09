// Object Literals

const mySym = Symbol("key")

const JsUser = {
    name : "Krishna",
    age : 18,
    city : "Kota",
    [mySym] : "kee",
    email : "userpro@gmail.com",
    isOnline : "true",
    lastOnline : ["Monday", "Friday", "Saturday"]
}

console.log(JsUser.email);
console.log(typeof mySym);
console.log(JsUser.lastOnline[1]);
console.log(JsUser[mySym]);

JsUser.email = "userAiExpert@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "noExpert@yahoo.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Shawty");
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello Shawty, ${this.name} here`);
}
console.log(JsUser.greetingtwo());
