// Assignment Code

let generateBtn = document.querySelector("#generate");
// This generates your random uppercase letter
let randomUpper = ["ABCDEFGHIJKLMNOPQRSTUVXYZ"];
// This generates your random lowercase letter
let randomLower = ["abcdefghijklmnopqrstuvwyz"];
// This generates your random number
let randomNumber = ["1234567890"];
// This generates your random special character
let randomCharacter = ["!@#$%^&*()_-+=[{]};:',<.>/?"];
// This array will hold the values that the user would want in password
let possibleArray = [];
// This is the finished, randomized string
let finishedPassword = "";

// Write password to the #password input
const writePassword = () => {
  alert("Welcome to the Password Generator Website!");
  alert("We are going to ask you a few prompts to ensure we create the right password for you.");

  // Ask user for Character length
  let charLength = prompt("How long would you want your password to be? Choose between 8 and 128 characters.");
    if (charLength < 8 || charLength > 128) {
      alert("This is an invalid choice!");
      return "Yes";
    } else {
      alert("You have chosen " + charLength + " characters.");
    }

  // Ask user if they would like Uppercase letters
  let confirmULetters = confirm("Would you like Uppercase letters in your password?")
    if (confirmULetters === true) {
      alert("Uppercase Letters will be included!");
      possibleArray.push(randomUpper);
    } else {
      alert("You will not have Uppercase Letters in your password!");
    }

  // Ask user if they would like lowercase letters
  let confirmLLetters = confirm("Would you like Lowercase letters in your password?")
    if (confirmLLetters === true) {
      alert("Lowercase Letters will be included!");
      possibleArray.push(randomLower);
    } else {
      alert("You will not have Lowercase Letters in your password!");
  }
  
  // Ask user if they would like Numbers
  let confirmNumbers = confirm("Would you like Numbers in your password?")
    if (confirmNumbers === true) {
      alert("Numbers will be included!");
      possibleArray.push(randomNumber);
    } else {
      alert("You will not have Numbers in your password!");
  }
  
  // Ask user if they would like Special Characters
  let confirmCharacters = confirm("Would you like Special Characters in your password?")
    if (confirmCharacters === true) {
      alert("Special Characters will be included!");
      possibleArray.push(randomCharacter);
    } else {
      alert("You will not have Special Characters in your password!");
  }


  // Taking all of the desired criteria that the user wants and combining them into one long string
  let joinedArray = possibleArray.join('');

  // The loop that generate a random password at the length the user desires
  for (let i = 0, n = joinedArray.length; i < charLength; i++) {
    finishedPassword += joinedArray.charAt(Math.floor(Math.random() * n));
  }

  // Access the text box in the HTML in order to push text
  let passwordText = document.querySelector("#password");

  // Taking the generated password and inputting into the text box
  passwordText.value = finishedPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", event => {
  writePassword();
});

