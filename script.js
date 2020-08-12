// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//  character arrays
  var numbers = [1,2,3,4,5,6,7,8,9,0,];
  var lwrCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uprCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specChar = [ " ","!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
  // array for combining appropriate arrays
  var comboArr = [""];
  // password blank array
  var password=[];
//  prompt for password length
  var pwdLength = prompt("Enter desired password length. Must between 8-128");
  // conditional statemnt for inproper input
  if ((pwdLength <8 || pwdLength >128)) {
    alert("unable to complete your request please try again");
    return;
  }
  // confirm numbers needed in password
  var numConf = confirm("Would you like numbers in your password?");
  if (numConf === true) {
    // add numbers to combo array
    comboArr= comboArr.concat(numbers);
  }
  // pass comboarray with no added variables
  if (numConf === false) {
    comboArr= comboArr;
  }
  // confirm lower case letter required
  var lwrCaseConf = confirm("Would you like lower case letters in your password?");
  // add lower case letters to combo array
  if (lwrCaseConf === true) {
    comboArr= comboArr.concat(lwrCase);
  }
  // pass combo array without adding lower case letters
  if (lwrCaseConf === false) {
    comboArr= comboArr;
  }
  // confirm upper case letters required
  var uprCaseConf = confirm("Would you like any uppercase letter in your password?");
  // add upper case letter to combo array
  if (uprCaseConf === true) {
      comboArr= comboArr.concat(uprCase);
    }
  // pass combo aray without adding upper case letters
  if (uprCaseConf === false) {
      comboArr= comboArr;
    }
  // confirm special characters needed
  var specCharConf = confirm("Would you like any special characters in your password?");
  // add special chars to combo array
  if (specCharConf === true) {
      comboArr= comboArr.concat(specChar);
    }
  // pass combo array without adding special chars
  if (specCharConf === false) {
      comboArr= comboArr;
    }
  // if no values selected no password genereated
    if((numConf === false)&&
  (lwrCaseConf === false)&&
  (uprCaseConf === false)&&
  (specCharConf === false)){
    alert("No values were selected no password could be generated!\n Please try again.");
  }

// for loop to asign randome value to password array from combo array
for (var i = 0; i < pwdLength; i++) {

    password[i] = comboArr[Math.floor(Math.random() * comboArr.length)];

 } 
//  send password to html
  var passwordText = document.querySelector("#password");
  // remove commas from array
  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

