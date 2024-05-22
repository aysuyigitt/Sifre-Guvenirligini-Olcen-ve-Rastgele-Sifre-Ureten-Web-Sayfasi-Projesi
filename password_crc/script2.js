var state= false;
function toogle(){
    if(state){
       document.getElementById("password").setAttribute("type","password");
       document.getElementById("eye").style.color='#cab4126';
       state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
       document.getElementById("eye").style.color='#512127ef'
        state=true;
    }
}
const input = document.querySelector("#password");
const inputBox = document.querySelector(".input-box");
const lowerUpperInput = document.querySelector(".lowerUpper");
const numberInput = document.querySelector(".number");
const symbolInput = document.querySelector(".symbol");
const logInput = document.querySelector(".log");
const lowerTitle = document.querySelector(".lowertitle");
const numberTitle = document.querySelector(".numbertitle");
const symbolTitle = document.querySelector(".symboltitle");
const logTitle = document.querySelector(".logTitle");
const buttonInput = document.querySelector(".input-2");
const sonucInput= document.querySelector("#sonuc");


function loginPassword(){
   let deneme;
   const password = input.value;
    let strength = 0;
    const lowerUpper = /[A-Z]/&&/[a-z]/;
    const number = /[0-9]/;
    const symbol = /[!"#£$%&'()*+,\-./:;<=>?@^_`{|}~]/;
   
   
    if(lowerUpper.test(password)){ 
       lowerTitle.style.color='darkgreen';
       lowerUpperInput.style.color='darkgreen';
    }else{
      lowerTitle.style.color='black';
      lowerUpperInput.style.color='black';
    }
   if(number.test(password)){
      numberTitle.style.color='darkgreen';
      numberInput.style.color='darkgreen';
   }else{
      numberTitle.style.color='black';
      numberInput.style.color='black';
   }
   if(symbol.test(password)){
    symbolTitle.style.color='darkgreen';
    symbolInput.style.color='darkgreen';
   }else{
      symbolTitle.style.color='black';
      symbolInput.style.color='black';
   }
   if(password.length>=12){
      logTitle.style.color='darkgreen';
      logInput.style.color='darkgreen';
   }else{
      logTitle.style.color='black';
      logInput.style.color='black';
   }
   if(lowerUpper.test(password)||number.test(password)||symbol.test(password)||lowerUpper.test(password)&&number.test(password)){
    inputBox.style.borderColor="red";
   }
   else{
    inputBox.style.borderColor="black";
   }
   if(lowerUpper.test(password)&&number.test(password)&&symbol.test(password)&&password.length>=12){
    inputBox.style.borderColor="green";
   }
   var passwordLength = input.value; // Hesaplanacak süre
   showCharCount(passwordLength );
}

input.addEventListener("input",loginPassword); 



