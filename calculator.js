const input = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let firstNumber = null;
let operator = null;
let shouldResetScreen = false;
let isOn = true;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "on") {
      input.value = "0";
      firstNumber = null;
      operator = null;
      shouldResetScreen = true;
      isOn = true;
      return;
    }

    if (value === "of") {
      input.value = "";
      firstNumber = null;
      operator = null;
      shouldResetScreen = false;
      isOn = false;
      return;
    }
        if (!isOn) return;

    if(value === "back"){
      if(input.value.length > 1){
        input.value = input.value.slice(0, -1)
      }else{
        input.value = "0"
      }
      return
    }
     
    if (value === "C") {
      input.value = "";
      firstNumber = null;
      operator = null;
      shouldResetScreen = false;
      return;
    }

    if (shouldResetScreen) {
      input.value = "";
      shouldResetScreen = false;
    }

    
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      firstNumber = parseFloat(input.value);
      operator = value;
      shouldResetScreen = true;
      return;
    }
    if (value === "=") {
      if (firstNumber === null || operator === null) return;
      const secondNumber = parseFloat(input.value);
      let result;
      switch (operator) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
      }
      input.value = result;
      firstNumber = null;
      operator = null;
      shouldResetScreen = true;
      return;
    }
    if (value === ".") {
      if (!input.value.includes(".")) {
        input.value += ".";
      }
      return;
    }
    input.value += value;
  });
});
