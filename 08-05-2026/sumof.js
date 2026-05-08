// Sum of first n numbers in JavaScript | Programming For Beginners

// for lopp 1 up to number
// formula = n(n+1)/2

function sumofn(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

console.log(sumofn(5)); // 15
console.log(sumofn(10)); // 55