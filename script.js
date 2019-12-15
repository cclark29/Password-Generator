
var confirmSymbol = confirm("Do you want to use special characters?");
var confirmNumber = confirm("Do you want to use numbers characters?");
var confirmLower = confirm("Do you want to use lowercase characters");
var confirmUpper = confirm("Do you want to use upper case characters");
var promptLength = prompt("How many characters pick between 8-128");




//objects//

const resultEl = document.getElementById("result");
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbersEl');
const symbolEl = document.getElementById('symbol');
var generate = document.querySelector("#generate");
var clipboard = document.querySelector("#clipboard");

const randomFunc = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol

};

//Generate Events

generate.addEventListener("click", function(event) {
    var hasLower = confirmLower;
    var hasNumber = confirmNumber;
    var hasSymbol = confirmSymbol;
    var hasUpper = confirmUpper;
    var hasLength = promptLength;
    event.preventDefault();


    var pass  = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    hasLength
    );

    resultEl.value = pass
    alert("Success")
});

//copy password to the clipboard//
clipboard.addEventListener("click", function(event) {
    const textarea = document.createElement("textarea");
    const password = resultEl.value;
    event.preventDefault();

    

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password Copied");


})


// Generate Password Func//
function generatePassword(lower,upper,number,symbol,length) {

    let generatePassword ="";

    const typesCount = lower + upper + number +symbol;

    //Filter//
    
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item =>Object.values(item)[0]
    );
   


    if(typesCount ===0) {
        return"";
 }

for(let i = 0; i < length; i+= typesCount ) {
  typesArr.forEach(type=> {
    const funcName = Object.keys(type)[0];

    generatePassword += randomFunc[funcName]();
  });

}
  return generatePassword

}

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

