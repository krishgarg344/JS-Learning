function addNums(num1, num2){
    console.log(num1 + num2);    
}

console.log(addNums(21, 5));

function addTwoNums(num1, num2){
    let result = num1 + num2
    return result
}

console.log("Sum :",addTwoNums(2, 7));

function greeting(user){
    if(user === undefined){
        console.log("Please enter a username");
        return
    }
    return `${user}, hello sir !!`
}

console.log(greeting());

const info = {
    username : "use_urr",
    contact : 9999990007
}

function handleIt(usr_info) {
    console.log(`Username : ${usr_info.username},\nContact : ${usr_info.contact}`);    
}
handleIt(info)