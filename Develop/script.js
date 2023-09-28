// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here are my global variables that will be tweaked around as the User navigates through the various prompts on the webpage.
var passLength;

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowChoice;

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperChoice;

var numbers = "1234567890";
var numChoice;

var symbols = "!@#$%^&*()-+[];,.<>/?{}\|";
var symChoice;

var chosenPassword;

function giveLength(){
  passLength = prompt("Give me a password length (pick between 8-128 characters please):")
  if(passLength < 8 || passLength > 128){
    alert(`Hmmm, this doesn't look like it's within 8-128, try again please!`);
    giveLength();
  }
}

function confirmLower(){
  lowChoice = confirm(`Would you like to use lowercase letters in your password?`);
}

function confirmUpper(){
  upperChoice = confirm(`Would you like to use uppercase letters in your password?`);
}

function confirmNumber(){
  numChoice = confirm(`Would you like to use numbers in your password?`);
}

function confirmSymbol(){
  symChoice = confirm(`Would you like to use symbols/special characters in your password?`);
}



confirmLower();
confirmUpper();
confirmNumber();
confirmSymbol();

console.log(lowChoice);
console.log(upperChoice);
console.log(numChoice);
console.log(symChoice);








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
