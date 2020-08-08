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
  var lwrCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uprCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var specChar = [ " ","!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",]
  var comboArr = []
  
  var password=[]

  for (var i = 0; i < pwdLength; i++) {
    if ((numConf = true) || (lwrCaseConf = false )|| (uprCaseConf = false) || (specCharConf =false)) {

      password[i] = numbers[Math.floor(Math.random() * numbers.length)];

  }if ((numConf = true) || (lwrCaseConf = true )|| (uprCaseConf = false) || (specCharConf =false)) {
    comboArr = numbers.concat(lwrCase)
    password[i] = comboArr[Math.floor(Math.random() * comboArr.length)]

  }if ((numConf = true) || (lwrCaseConf = true )|| (uprCaseConf = true) || (specCharConf =false)) {
    comboArr = numbers.concat(lwrCase, uprCase)
    password[i] = comboArr[Math.floor(Math.random() * comboArr.length)]

  }if ((numConf = true) || (lwrCaseConf = true )|| (uprCaseConf = true) || (specCharConf =true)) {
    comboArr = numbers.concat(lwrCase, uprCase, specChar)
    password[i] = comboArr[Math.floor(Math.random() * comboArr.length)]

  }
    }
    
    
  


  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
