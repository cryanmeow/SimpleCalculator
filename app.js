let textBox = document.querySelector("#boxText");
const clear = document.querySelector("#btnClear");
const btnResult = document.querySelector("#btnResult");
const btnSin = document.querySelector("#btnSin");
const btnCos = document.querySelector("#btnCos");
const btnTan = document.querySelector("#btnTan");
const btnASin = document.querySelector("#btnASin");
const btnACos = document.querySelector("#btnACos");
const btnATan = document.querySelector("#btnATan");
const btnPercent = document.querySelector("#btnPercent");
const btnSquare = document.querySelector("#btnSquare");
const btnPhi = document.querySelector("#btnPhi");
const btnPangkat2 = document.querySelector("#btnPangkat2");
const btnEulers = document.querySelector("#btnEulers");
const btnMins = document.querySelector("#btnMins");
const btnRound = document.querySelector("#btnRound");
const btnRdm = document.querySelector("#btnRdm");
const btnLog = document.querySelector("#btnLog");
const btnLn = document.querySelector("#btnLn");
let number1, number2;

function addChar(inChar){
  if(textBox.value === "0"){
    textBox.value = inChar;
  } else{
    textBox.value += inChar;
  }
}

clear.addEventListener('click', () =>{
  textBox.value = "0";
});

btnResult.addEventListener('click', () => {
  textBox.value = eval(textBox.value);
});

btnSin.addEventListener('click', () =>{
  textBox.value = Math.sin(textBox.value);
});

btnTan.addEventListener('click', () =>{
  textBox.value = Math.tan(textBox.value);
});

btnPhi.addEventListener('click', () =>{
  textBox.value = Math.PI;
});

btnASin.addEventListener('click', () =>{
  textBox.value = Math.asin(textBox.value);
});

btnACos.addEventListener('click', () =>{
  textBox.value = Math.acos(textBox.value);
});

btnATan.addEventListener('click', () =>{
  textBox.value = Math.atan(textBox.value);
});

btnPercent.addEventListener('click', () =>{
  textBox.value = textBox.value/100;
});


btnSquare.addEventListener('click', () =>{
  textBox.value = Math.sqrt(textBox.value);
});

btnRdm.addEventListener('click', () =>{
  textBox.value = Math.random(textBox.value);
});

btnPangkat2.addEventListener('click', () =>{
  let number1 = textBox.value;
  let number2 = textBox.value;
  let inChar = number1 * number2;
  textBox.value = inChar;
});

btnEulers.addEventListener('click', () =>{
  textBox.value = Math.E;
});

btnMins.addEventListener('click', () =>{
  textBox.value = 0 - textBox.value;
});

btnLog.addEventListener('click', () =>{
  textBox.value = (1/Math.LN10) * Math.log(textBox.value);
});

btnLn.addEventListener('click', () =>{
  textBox.value = Math.log(textBox.value);
});
