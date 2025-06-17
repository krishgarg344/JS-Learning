// Immediately Invoked Function Expressions (IIFE)
// ()()   parenthesis 1 : function definition
// parenthesis 2 : execution call

// IIFE is used not only for immediate execution of function but maily to reduce pollution for global scope

(function message() {  // named IIFE
    console.log(`DB COnnected`);
})(); // always end IIFE with ; 

((name) => {    // unnamed IIFE
    console.log(`DB connected again ${name}`);
})("frank");