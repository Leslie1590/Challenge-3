var passwordCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
var passwordSpecial = [
  "!", "@", "#", "$", "%",
]

// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword() { 
  
  //password length prompt
  var passwordLength = "";

    while (passwordLength === "" || passwordLength === null) {
      passwordLength = prompt("What length is your password? TYPE any number between 8 and 128.")
    }
      if (passwordLength <=7) {
      window.alert ("Please enter in a correct value.")
    }
    else if (passwordLength >=129) {
      window.alert ("Please enter in a correct value.")
    }
    else {
      window.alert ("You have chosen to have " + passwordLength + " characters.")
    }

  //password characters prompt
  var passwordCharacters = "";

    while (passwordCharacters === "" || passwordCharacters === null) {
      passwordCharacters = prompt("Would you like to add UPPER case characters? Press 1 for YES or 2 for NO.")
      }
      // if 1 is true
      if (passwordCharacters === "1") {
      console.log(passwordCharacters)
      }
      // if 2 is false
      else if (passwordCharacters === "2") {
      }
      else {
      window.alert ("Please choose a correct value.")
      }
      return passwordCharacters;

  // generate special character types
  var passwordSpecial = "";

    while (passwordSpecial === "" || passwordSpecial === null) {
      passwordSpecial = prompt("Would you like to add SPECIAL characters? Press 1 for YES and 2 for NO.")
      }
      // if 1 is true
      if (passwordSpecial === "1") {
      console.log(passwordSpecial)
      }
      // if 2 is false
      else if (passwordSpecial === "2") {
      }
      else {
      window.alert ("Please choose a correct value.")
    }

    
};



// password input function
function writePassword() {
    var password = generatePassword();
   
    var passwordText = document.querySelector("#password");
  
    // makes the password show on screen
    passwordText.value = password;

    return passwordCharacters;
  };

// add event listener to generate button

generateBtn.addEventListener("click", writePassword);


