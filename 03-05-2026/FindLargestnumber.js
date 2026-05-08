// Find Largest number among 3 numbers in JavaScript

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}   
let num1 = 90;
let num2 = 25;
let num3 = 15;
let largest = findLargest(num1, num2, num3);
console.log("The largest number among", num1, num2, "and", num3, "is:", largest);   






// console.log(Math.max(40,400,50,60))