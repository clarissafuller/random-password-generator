//DOM ELEMENTS==============================================

//DATA======================================================
// Assignment Code
var generateBtn = document.querySelector("#generate");

//FUNCTIONS==================================================
function writePassword() {
  //prompt the user for how long they want the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getPasswordLength() {
  var length =
    parseInt[prompt("How long would you like your password to be? (8-128")];
  if (length < 8 || length > 128) {
    alert("Length must be 8-128 characters long.");
    return getPasswordLength();
  }
  return length;
}

// Write password to the #password input
function generatePassword() {
  var chosenCharacterSet = " ";
  var length = getPasswordLength;
  var characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
    special: "!@#$%^&*()_+",
    numerical: "1234567890",
  };

  for (var i = 0; i < Object.keys(characterSets).length; i++) {
    if (confirm("Would you like to use " + key + " characters?")) {
      chosenCharacterSet += characterSets[key];
    }
  }
  var password = " ";

  for (var i = 0; i < length; i++)
    password =
      +chosenCharacterSet[
        Math.floor(Math.random() * chosenCharacterSet.length)
      ];
  return password;
}

//USER INTERACTIONS===============================================
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
