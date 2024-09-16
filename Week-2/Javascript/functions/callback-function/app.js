function notifyUser() {
  console.log("notifyUser function called");
}

function yeahManFunction(notifyUserCallback) {
  alert("Running yeahMan ...Please wait for function to complete");
  alert("Function complete ...Notifying user");
  notifyUserCallback();
}

yeahManFunction(notifyUser);

function yeahManFunction(onCompleteCallback) {
  alert("Running yeahMan ...Please wait for function to complete");
  alert("Function complete ...Notifying user");
  onCompleteCallback();
}

yeahManFunction(function () {
  alert("function called!");
});

//calculator
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);

  return operationCallback(a, b);
}

const result = calculatorFunction(4242, 5668, add);
console.log(result);

const result2 = calculatorFunction(346457, 64554, multiply);
console.log(result2);

const finalResult = calculatorFunction(result, result2, add);
console.log(finalResult);
