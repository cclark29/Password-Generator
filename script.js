
var confirmSymbol = confirm("Do you want to use special characters?");
var confirmNumber = confirm("Do you want to use numbers characters?");
var confirmLower = confirm("Do you want to use lowercase characters");
var confirmUpper = confirm("Do you want to use upper case characters");
var promptLength = prompt("How many characters pick between 8-128");




//objects//

const resultEl = document.getElementById('result');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbersEl');
const symbolEl = document.getElementById('symbol');
var generate = document.querySelector("#generate");
const clipboardEl = document.getElementById('clipboard');


generate.addEventListener("click", function(event) {
    event.preventDefault();

console.log(event);

//


// I need a for loop t the number of times inputed for length, using the true reponses//




// functions//

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
});
