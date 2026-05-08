// Print All Prime Numbers in an Interval in JavaScript
// prime number -> 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

isPrime = (number) =>{
    if(number <= 1)
        return false;

    for(let i=2; i<= number/2; i++){
        if(number % i === 0)
            return false;
    }
    return true;
}

let lowerLimit =1, upperLimit = 10;
for (let i=lowerLimit; i<= upperLimit; i++){
    if(isPrime(i))
        console.log(`Number ${i} is a prime number`);
};