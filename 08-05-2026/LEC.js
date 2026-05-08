//  Find LCM of two numbers in JavaScript

//LCM = 2,3 -> 6

function getLcM(num1, num2) {

    // take bigger number
    let lcm = num1 > num2 ? num1 : num2;

    while (true) {

        // check divisible by both numbers
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            break;
        }

        lcm++; // increase lcm
    }

    return lcm;
}

console.log(getLcM(2, 3)); // 6
console.log(getLcM(4, 6)); // 12