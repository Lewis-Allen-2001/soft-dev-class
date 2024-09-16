console.log("ey up!");
//functions

//how to prepare (declare) a function

function sayWelcome() {
  //function goes inside {}
  console.log("Welcome");
}

//calling function
//just tyoe name of funcion followed by ()
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();

//function calculator

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(calculate(2468, 36912, "+"));
console.log(calculate(2468, 36912, "-"));
console.log(calculate(2468, 36912, "*"));
console.log(calculate(2468, 36912, "/"));
