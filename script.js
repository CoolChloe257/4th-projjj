var billAmount = document.getElementById("box");
var button = document.getElementById("calc");
var tipAmount = 0;
var total = 0;

function calculate(){
tipAmount = billAmount.value * 0.2;
  
  console.log("you should tip about "+ tipAmount)
  console.log("this brings your total to be about " + tipAmount + billAmount.value + "$")
}