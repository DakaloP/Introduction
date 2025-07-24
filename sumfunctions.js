// let num1=50;
// let num2=12;

// function sum(num1,num2) {
//     this.num1=num1;
//     this.num2=num2;
//     let answer = num1+num2;
// return answer;
// }

// console.log(sum(num1,num2))


prompt = require('prompt-sync')();
let x=prompt("Type any number:");
let y=prompt("Type Another number:");

let num1=parseInt(x);
let num2=parseInt(y);

function sum(num1,num2) {
    this.num1=num1;
    this.num2=num2;
    let answer = num1+num2;
return answer;
} 
console.log(sum(num1,num2))