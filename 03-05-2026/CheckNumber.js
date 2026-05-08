// Check if a number is Positive, Negative or Zero in JavaScript

// function checkNumber(num) {
// }


// checkNumber = (a,b) => a + b
// console.log(checkNumber(5, 10)); // Output: 15



// ------------------------------------------------------------------------



// checkNumber = (number) =>{
//     if (number === 0)
//         return 0
//     else 
//         return "not zero"
// }
// console.log(checkNumber(0)); // Output: 0
// console.log(checkNumber(5)); // Output: "not zero"



// ------------------------------------------------------------------------


checkNumber  = (number) =>{
    if(number === 0 )
        return "Number is zero"
    if( number < 0 )
        return "Number is negative"
    if( number > 0 )
        return "Number is positive"
}
console.log(checkNumber(0)); // Output: "Number is zero"
console.log(checkNumber(-5)); // Output: "Number is negative"
console.log(checkNumber(10)); // Output: "Number is positive"