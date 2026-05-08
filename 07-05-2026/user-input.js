const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your first name: ", function(firstname) { 
    console.log(`your first name is: ${firstname}`);
    r1.close();
});
