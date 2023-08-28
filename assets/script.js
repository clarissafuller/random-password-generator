//DOM ELEMENTS==============================================

//DATA======================================================
// Assignment Code
var generateBtn = document.querySelector("#generate");

//FUNCTIONS==================================================
function generatePassword() {
  //prompt the user for how long they want the password
  var passwordLength = prompt(
    "How long would you like your password to be?" +
      "Please choose a length between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    // do what needs to be done if the user made a mistake
  }

  //prompt the user if they want special characters or not
  var passwordSpecialCharaters = confirm(
    "Would you like to include special characters?"
  );
  //prompt the user if they want upper case or not
  //prompt the user if they want lower case or not
  //prompt the user if they want numbers or not

  // last part of the function
  return "A password to be generated later";
}

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
