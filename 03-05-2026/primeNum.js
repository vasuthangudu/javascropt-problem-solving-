// Check Prime Number in JavaScript

const checkPrime = (num) => {
    let isPrime = true;

    // 1 and negative numbers are not prime
    if (num === 1 || num < 1) {
        return "number is not prime number";
    }

    // loop from 2 to square root of number
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break; // stop loop early
        }
    }

    if (isPrime) {
        return "number is prime number";
    } else {
        return "number is not prime number";
    }
}

// Testing
console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(4));
console.log(checkPrime(5));