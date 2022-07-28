// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  

// Start of password input function
function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector("#password");
  
    // Makes the password show on screen
    passwordText.value = password;


    //generate password function
    function generatePassword() {
      var passwordLength = "";

      while (passwordLength === "" || passwordLength === null) {
      passwordLength = prompt("What length is your password? TYPE any number between 8 and 128.")
        }
        console.log(passwordLength);
      if (passwordLength <=7) {
        window.alert ("Please enter in a correct value.")
      }
      else if (passwordLength >=129) {
        window.alert ("Please enter in a correct value.")
      }
      else {
        window.alert ("You have chosen to have " + passwordLength + " characters.")
      }
    }
};




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);