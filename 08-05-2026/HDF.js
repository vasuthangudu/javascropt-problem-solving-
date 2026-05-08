// Find HCF or GCD of two numbers in JavaScript

// HEF / GCF -> 5, 10  =  1,5

function getHEF(num1,num2){
    let hcf = 0;
    for(let i=1;i<=num1 && i<=num2; i++){
        if(num1 % i == 0 && num2 % i ==0 ){
            hcf = i;
        }
    }
    return hcf;
}

console.log(getHEF(5,10)); // 5
console.log(getHEF(12,15)); // 3