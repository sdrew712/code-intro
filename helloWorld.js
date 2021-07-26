//this is our first js comment
// console.log("hello world");

const readline = require('readline');



const fName = "Sarah";
let age = 18;

// console.log(fName, age);

// age = 19;

// console.log(age);

const isCool = true;


let whatImEatingForLunch = "Chick fil a nuggets";

// console.log(fName, age, isCool, whatImEatingForLunch);

let aVar = null;

// console.log(age + aVar);

let x = 4;
let y = 10;
let z = 7 + 8;

let sum = x + y + z;

// console.log(sum);

let str = "StringOne";
let str2 = 'StringTwo';

let combinedStrings = str + ", " + str2

// console.log(combinedStrings);

// let templateLiterals = `"Hello, ${fName}," said the man.`;

// console.log(templateLiterals);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// reader.question("Howdy, what's your name?", function(answer) {
//     console.log("Hi " + answer);
//   });

reader.question("Do you like cats? y/n", function(answer) {
    if (answer === 'y'){
        console.log("You're cool");
    }
    else{
        console.log("You're gross");
    }
});