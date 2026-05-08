//Factorial of 3 = 3 * 2 * 1 = 6
//Factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120

 const factorial = (num) =>{
    if(num === 1)
        return 1;
    
    return num * factorial(num - 1);    
}

console.log(`Factorial of 3 is ${factorial(3)}`);
console.log(`Factorial of 5 is ${factorial(5)}`);