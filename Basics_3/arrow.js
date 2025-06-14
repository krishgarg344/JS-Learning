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