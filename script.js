var char = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var sym = "!@#$%^&*_-=";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var upper = document.getElementById("charUp")
var pwd = document.getElementById("password");
var generate = document.getElementById("generate");

console.log("TEST!")

function password(l,characters){
  var pwd = " ";

  for(var i = 0; i<l; i++){
    console.log("loop")
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

generate.addEventListener("click",function(e){

  var characters = char;
  (numBox.checked) ? characters += num : "";
  (symBox.checked) ? characters += sym : "";
  (upper.checked) ? characters += charUp : "";
  console.log(charNum.value)
  pwd.value = password(charNum.value, characters);
  console.log("called pwd funtion")
  console.log(password("charNum.value, characters"));

});