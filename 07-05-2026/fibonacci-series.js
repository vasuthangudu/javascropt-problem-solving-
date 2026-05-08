// fibonacci series - 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

let n1 = 0, n2 = 1
console.log(n1);
console.log(n2);

for(let i=3; i<=10; i++){
    let n3 = n1 + n2; // 0 + 1 = 1
    console.log(n3);
    n1 = n2; // 1
    n2 = n3; // 1
}