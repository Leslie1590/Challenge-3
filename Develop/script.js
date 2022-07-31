// get references to the #generate element
var generateBtn = document.querySelector("#generate");


  

// start of password input function
function writePassword() {

    var password = generatePassword();
    var password = generateCharacters ();
    var password = generateSpecial ();

    var passwordText = document.querySelector("#password");
  
    // Makes the password show on screen
    passwordText.value = password;


    // generate password function
    function generatePassword() {
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
      console.log(passwordLength);
      
    }

     // generate character types
    function generateCharacters() {
    var passwordCharacters = "";

    while (passwordCharacters === "" || passwordCharacters === null) {
      passwordCharacters = prompt("Would you like to add UPPER case characters? Press 1 for YES or 2 for NO.")
      }
      if (passwordCharacters === "1") {
      console.log(passwordCharacters)
      }
      else if (passwordCharacters === "2") {
      console.log(passwordCharacters)
      }
      else {
      window.alert ("Please choose a correct value.")
      }
    }

    // generate special character types
    function generateSpecial() {
      var passwordSpecial = "";

    while (passwordSpecial === "" || passwordSpecial === null) {
      passwordSpecial = prompt("Would you like to add SPECIAL characters? Press 1 for YES and 2 for NO.")
      }
      if (passwordSpecial === "1") {
      console.log(passwordSpecial)
      }
      else if (passwordSpecial === "2") {
      console.log(passwordSpecial)
      }
      else {
      window.alert ("Please choose a correct value.")
      }
    }




};






// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);