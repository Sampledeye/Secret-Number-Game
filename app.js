/*Crear una función que muestre "¡Hola, mundo!" en la consola.
Grait ();
function hello() {
  return console.log("HelloWorld");
}
*/
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
/*function showUserName(name) {
  console.log(`Hello, ${name}`);
}
showUserName("Alice");
*/
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
/*function showDouble(number) {
  return number * 2;
}
let doubleNumber = showDouble(5);
console.log(doubleNumber);
*/
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
/*function average(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}
let calculate = avarage(5, 10, 15);
console.log(calculate);
*/
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
/*function showMajor(number1, number2) {
  return number1 > number2 ? number1 : number2;
}
let majorNumber = showMajor(4, 7);
console.log(majorNumber);
*/
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
/*function numberPerNumber(number) {
  return number * number;
}
let multiplication = numberPerNumber(8);
console.log(multiplication);
*/

let secretNumber = 0;
let intents = 0;
let sortNumberList = [];
let maximumNumber = 10;
function elementAndText(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
  return;
}
function intentVerification() {
  let userNumber = parseInt(document.getElementById("userValue").value);
  if (userNumber === secretNumber) {
    elementAndText(
      "p",
      `You right, you get in ${intents} ${intents === 1 ? "time" : "times"}`
    );
    document.getElementById("restart").removeAttribute("disabled");
  } else {
    if (userNumber > secretNumber) {
      elementAndText("p", "The number is menor");
    } else {
      elementAndText("p", "The number is major");
    }
    intents++;
    cleanBox();
  }
  return;
}
function secretNumberGenerator() {
  let generatedNumber = Math.floor(Math.random() * maximumNumber) + 1;
  console.log(generatedNumber);
  console.log(sortNumberList);
  if (sortNumberList.length == maximumNumber) {
    elementAndText("p", "you rich your maximum intents!");
  } else {
    if (sortNumberList.includes(generatedNumber)) {
      return secretNumberGenerator();
    } else {
      sortNumberList.push(generatedNumber);
      return generatedNumber;
    }
  }
}
function cleanBox() {
  document.querySelector("#userValue").value = "";
}
function startConditions() {
  elementAndText("h1", "Secret number game");
  elementAndText("p", `Choose a number from 1 to ${maximumNumber}`);
  secretNumber = secretNumberGenerator();
  intents = 1;
}
function restartGame() {
  //clean box
  cleanBox();
  //start message
  startConditions();
  //Inactive Button
  document.getElementById("restart").setAttribute("disabled", "true");
}
startConditions();
