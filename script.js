function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

const btn0 = document.querySelector("#num0");
const btn1 = document.querySelector("#num1");
const btn2 = document.querySelector("#num2");
const btn3 = document.querySelector("#num3");
const btn4 = document.querySelector("#num4");
const btn5 = document.querySelector("#num5");
const btn6 = document.querySelector("#num6");
const btn7 = document.querySelector("#num7");
const btn8 = document.querySelector("#num8");
const btn9 = document.querySelector("#num9");
const btnPoint = document.querySelector("#point");
const btnEquals = document.querySelector("#equals");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnClear = document.querySelector("#clear");
const btnToggle = document.querySelector("#toggle");
const btnPercent = document.querySelector("#percent");