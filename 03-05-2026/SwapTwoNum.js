//  Swap Two numbers without using third variable

let a = 5;
let b = 7;
console.log("Before swapping: a =", a, "b =", b);





// [a, b] = [b, a];
// console.log("After swapping: a =", a, "b =", b);





a = a + b; // a now holds the sum of a and b          5 + 7 = 12
b = a - b; // b now holds the original value of a     12 - 7 = 5
a = a - b; // a now holds the original value of b     12 - 5 = 7
console.log("After swapping without using third variable: a =", a, "b =", b);