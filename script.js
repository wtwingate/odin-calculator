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
    case "add":
      return add(Number(num1), Number(num2));
    case "subtract":
      return subtract(Number(num1), Number(num2));
    case "multiply":
      return multiply(Number(num1), Number(num2));
    case "divide":
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

display.textContent = "0";

// Calculator data and methods
let calculator = {
  history: [],
  number: "",
  operator: "",
  result: "",
  point: false,
  pressOperator: function () {
    if (this.number !== "") {
      this.history.push(this.number);
      this.number = "";
      this.point = false;
      if (this.operator && this.history.length > 1) {
        this.result = operate(
          this.history[this.history.length - 2],
          this.history[this.history.length - 1],
          this.operator
        );
        this.history.push(this.result);
        display.textContent = this.result;
      }
    }
  },
  pressClear: function () {
    this.history = [];
    this.number = "";
    this.operator = "";
    this.result = "";
    this.point = false;
  },
  pressToggle: function () {
    if (this.number.startsWith("-")) {
      this.number = this.number.slice(1);
    } else {
      this.number = "-" + this.number;
    }
  },
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

btnPoint.addEventListener("click", () => {
  if (!calculator.point) {
    calculator.number += ".";
    display.textContent = calculator.number;
    calculator.point = true;
  }
});

// Operator events
btnAdd.addEventListener("click", () => {
  calculator.pressOperator();
  calculator.operator = "add";
});

btnSubtract.addEventListener("click", () => {
  calculator.pressOperator();
  calculator.operator = "subtract";
});

btnMultiply.addEventListener("click", () => {
  calculator.pressOperator();
  calculator.operator = "multiply";
});

btnDivide.addEventListener("click", () => {
  calculator.pressOperator();
  calculator.operator = "divide";
});

btnEquals.addEventListener("click", () => {
  calculator.pressOperator();
  calculator.operator = "";
});

// Function events
btnClear.addEventListener("click", () => {
  calculator.pressClear();
  display.textContent = "0";
});

btnToggle.addEventListener("click", () => {
  calculator.pressToggle();
  display.textContent = calculator.number;
});

btnPercent.addEventListener("click", () => {});
