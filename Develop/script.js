// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var pwdLength = prompt("Enter desired password length. Must between 8-128");
  var numConf = confirm("Would you like numbers in your password?");
  var lwrCaseConf = confirm("Would you like lower case letters in your password?");
  var uprCaseConf = confirm("Would you like any uppercase letter in your password?");
  var specCharConf = confirm("Would you like any special characters in your password?");
  var numbers = [1,2,3,4,5,6,7,8,9,0,];


  for (var i = 0; i < pwdLength; i++) {
    var password=[" "]
    var password[i] = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(password)
  }
  


  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
