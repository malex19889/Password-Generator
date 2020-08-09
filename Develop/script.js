// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//  character arrays
  var numbers = [1,2,3,4,5,6,7,8,9,0,];
  var lwrCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uprCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var specChar = [ " ","!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",]
  
  var comboArr = [""]
  var password=[]
 
  var pwdLength = prompt("Enter desired password length. Must between 8-128");
  if ((pwdLength <8 || pwdLength >128)) {
    alert("unable to complete your request");
    return;
  }
  
  var numConf = confirm("Would you like numbers in your password?");
  if (numConf === true) {
    comboArr= comboArr.concat(numbers);
  }
  if (numConf === false) {
    comboArr= comboArr;
  }
  var lwrCaseConf = confirm("Would you like lower case letters in your password?");
  if (lwrCaseConf === true) {
    comboArr= comboArr.concat(lwrCase)
  }
  if (lwrCaseConf === false) {
    comboArr= comboArr;
  }
  var uprCaseConf = confirm("Would you like any uppercase letter in your password?");
  if (uprCaseConf === true) {
      comboArr= comboArr.concat(uprCase)
    }
  if (uprCaseConf === false) {
      comboArr= comboArr;
    }
  var specCharConf = confirm("Would you like any special characters in your password?");
  if (specCharConf === true) {
      comboArr= comboArr.concat(specChar)
    }
  if (specCharConf === false) {
      comboArr= comboArr;
    }

for (var i = 0; i < pwdLength; i++) {

    password[i] = comboArr[Math.floor(Math.random() * comboArr.length)];

 } 
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

