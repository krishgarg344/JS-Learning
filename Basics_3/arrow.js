// this : refers to current context

const user = {
    name : "andrews",
    pin : 456546,
    welcome : function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);    
    }
}

user.welcome()
user.name = "sam"
user.welcome()

// 'this' only works for an object not ona a function

const one = function(){
    let height = "six feet"
    console.log("height :", this.height);
}
one()

// arrow function
const two = () => {
    let height = "six feet"
    console.log("height :", this.height);
}
two()

// Syntax of arrow function : () => {}

const addnums = (num1, num2) => {
    return num1 + num2
}
console.log(addnums(3,7));
 