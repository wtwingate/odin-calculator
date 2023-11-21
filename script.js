"use strict";

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
      return add(Number(num1), Number(num2));
    case "-":
      return subtract(Number(num1), Number(num2));
    case "*":
      return multiply(Number(num1), Number(num2));
    case "/":
      return divide(Number(num1), Number(num2));
  }
}

const display = document.querySelector("#display");
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

let calculator = {
  history: [],
  number: "",
  operator: "",
  result: "",
};

// Number events
btn0.addEventListener("click", () => {
  calculator.number += "0";
  display.textContent = calculator.number;
});

btn1.addEventListener("click", () => {
  calculator.number += "1";
  display.textContent = calculator.number;
});

btn2.addEventListener("click", () => {
  calculator.number += "2";
  display.textContent = calculator.number;
});

btn3.addEventListener("click", () => {
  calculator.number += "3";
  display.textContent = calculator.number;
});

btn4.addEventListener("click", () => {
  calculator.number += "4";
  display.textContent = calculator.number;
});

btn5.addEventListener("click", () => {
  calculator.number += "5";
  display.textContent = calculator.number;
});

btn6.addEventListener("click", () => {
  calculator.number += "6";
  display.textContent = calculator.number;
});

btn7.addEventListener("click", () => {
  calculator.number += "7";
  display.textContent = calculator.number;
});

btn8.addEventListener("click", () => {
  calculator.number += "8";
  display.textContent = calculator.number;
});

btn9.addEventListener("click", () => {
  calculator.number += "9";
  display.textContent = calculator.number;
});

// Operator events
btnAdd.addEventListener("click", () => {
  calculator.history.push(calculator.number);
  calculator.number = "";
  if (calculator.operator) {
    calculator.result = operate(
      calculator.history[calculator.history.length - 2],
      calculator.history[calculator.history.length - 1],
      calculator.operator
    );
    calculator.history.push(calculator.result);
    display.textContent = calculator.result;
  }
  calculator.operator = "+";
});

btnSubtract.addEventListener("click", () => {
  calculator.history.push(calculator.number);
  calculator.number = "";
  if (calculator.operator) {
    calculator.result = operate(
      calculator.history[calculator.history.length - 2],
      calculator.history[calculator.history.length - 1],
      calculator.operator
    );
    calculator.history.push(calculator.result);
    display.textContent = calculator.result;
  }
  calculator.operator = "-";
});

btnMultiply.addEventListener("click", () => {
  calculator.history.push(calculator.number);
  calculator.number = "";
  if (calculator.operator) {
    calculator.result = operate(
      calculator.history[calculator.history.length - 2],
      calculator.history[calculator.history.length - 1],
      calculator.operator
    );
    calculator.history.push(calculator.result);
    display.textContent = calculator.result;
  }
  calculator.operator = "*";
});

btnDivide.addEventListener("click", () => {
  calculator.history.push(calculator.number);
  calculator.number = "";
  if (calculator.operator) {
    calculator.result = operate(
      calculator.history[calculator.history.length - 2],
      calculator.history[calculator.history.length - 1],
      calculator.operator
    );
    calculator.history.push(calculator.result);
    display.textContent = calculator.result;
  }
  calculator.operator = "/";
});
