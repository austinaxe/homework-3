// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var char = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var sym = "!@#$%^&*_-=";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var password = document.getElementById("password");

generate.addEventListener("click",function(e){

  var characters = char;
  (numBox.checked) ? characters += num : "";
  (symBox.checked) ? characters += sym : "";
  (charUp.checked) ? characters += charUp : "";
  e.value = password(charNum.value, characters);

});
function password(l,characters){
  var pwd = " ";

  for(var i = 0; i>l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));

  }
  return pwd;
}
      
