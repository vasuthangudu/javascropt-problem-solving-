// Find Factors of a Number in JavaScript

// factor = number = 10 -> 1,2,5,10

function getFactors(num){
    let factors = [];
    for(let i=1; i<=num; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

console.log(getFactors(10)); // [1, 2, 5, 10]
console.log(getFactors(15)); // [1, 3, 5, 15]