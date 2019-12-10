//create the variables//




var confirmSymbol = confirm(" Do you want to use special characters?");
var confirmNumber = confirm("Do you want to use numbers characters?");
var confirmLower = confirm("Do you want to use lowercase characters");
var confirmUpper = confirm("Do you want to use upper case characters");
var promptLengthEl = prompt("How many Characters pick between 8-128");

const randomFunc = {
    special:getRandomSymbol,
    number:getRandomNumber,
    lower:getRandomNumber,
    upper:getRandomUpper,
   

};



const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbersEl');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', () => {
    const hasLower = lowercaseEl.value;
    console.log(hasLower);
})



function getRandomSymbol() {
    const symbols = '!@#$%^&*()=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}



//Have to make selection random//

// Have to run function to get random passowrd//

// have to print out out put//

