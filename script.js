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

var options = [];
var optionSelected;
var characterSelected;
var chosenCharacter;
var chosenPassword = [];

//Here are the various helper/nesting functions that tackle the various parts of the request

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function giveLength(){
  passLength = prompt("Give me a password length (pick between 8-128 characters please):")
  if(passLength < 8 || passLength > 128){
    alert(`Hmmm, this doesn't look like it's within 8-128, try again please!`);
    giveLength();
  }
}

// These confirm functions ask which characters the User would like to use
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
function confirmGrabber(){
  confirmLower();
  confirmUpper();
  confirmNumber();
  confirmSymbol();
  optionChecker();
}

function optionChecker(){
  if(!lowChoice && !upperChoice && !numChoice && !symChoice){
    alert(`Um... you haven't left me with any characters to choose from. Please click "OK" for at least one of these options: lowercase letters, uppercase letters, numbers, symbols/special characters`);
    confirmGrabber();
  }else {
    optionMaker();
  }
}

// These functions set up the chosen characters into an array, and then randomly picks them and adds them to into another array
function optionMaker(){
  if(lowChoice){
    options.push(lowercase);
  }
  if(upperChoice){
    options.push(uppercase);
  }
  if(numChoice){
    options.push(numbers);
  }
  if(symChoice){
    options.push(symbols);
  }
}

function optionSelector(){
  optionSelected = generateRandomNumber(0, options.length - 1);
}

function pickCharacter(){
  var location = options[optionSelected]
  characterSelected = generateRandomNumber(0, options[optionSelected].length-1);
  console.log(characterSelected);
  chosenCharacter = location[characterSelected];
  console.log(chosenCharacter);
}

function randomPick(){
  for(x=0; x < passLength; x++){
    optionSelector();
    pickCharacter();
    chosenPassword.push(chosenCharacter);
  }
}

// This is the main function that is called when the button is clicked, which runs all the previous functions and returns a joined string from the array that was randomly generated

function generatePassword(){
  // This if statement resets the global values in the case that the User wants to generate another password

  if(passLength !== null){
    passLength = null;
    lowChoice = null;
    upperChoice = null;
    numChoice = null;
    symChoice = null;
    options = [];
    optionSelected = null;
    characterSelected = null;
    chosenCharacter = null;
    chosenPassword = [];
  }
  giveLength();
  confirmGrabber();
  randomPick();
  return chosenPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
