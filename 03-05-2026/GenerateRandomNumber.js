// How to Generate Random Number 

function getRandomNumber(){
    return Math.ceil(Math.random() * 10);
}

for(let i=0;i<5;i++){
    console.log(`the random number is ${getRandomNumber()}`); 
}