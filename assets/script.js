//DOM ELEMENTS==============================================

//DATA======================================================
// Assignment Code
var generateBtn = document.querySelector("#generate");

//FUNCTIONS==================================================
function getUserChoice() {
  var passwordLength = prompt(
    "How long would you like your password to be?" +
      "Please choose a length between 8 and 128 characters"
  );
}
//prompt the user for how long they want the password
//prompt the user if they want special characters or not
//prompt the user if they want upper case or not
//prompt the user if they want lower case or not
//prompt the user if they want numbers or not

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//USER INTERACTIONS===============================================
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//INITILAZATIONS====================================================
