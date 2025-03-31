let firstNum = null;
let secondNum = null;
let operator = null;

let display = document.querySelector(".display");
let equalBtn = document.querySelector(".equal");
let numBtns = document.querySelectorAll(".number");
let operateBtns = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear-btn");
let symbol = document.querySelector(".operator-symbol");

clearBtn.addEventListener("click", () => {
  window.location.reload();
});

operateBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.value);
    operator = e.target.value;
    symbol.textContent = e.target.textContent;
  });
});

numBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!firstNum) {
      firstNum = Number(e.target.value);
    } else {
      secondNum = Number(e.target.value);
    }
    console.log(e.target.value);
    display.textContent = e.target.value;
  });
});

equalBtn.addEventListener("click", () => {
  if (firstNum && secondNum && operator) {
    display.textContent = operate(firstNum, secondNum, operator);
    firstNum = operate(firstNum, secondNum, operator);
  } else {
    /* should to rewrite this logic, like in windows' calculator */
    throw new Error("you must choose fist number, operator, second number");
  }
});

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "addition":
      return addNumbers(num1, num2);
    case "division":
      return divideNumbers(num1, num2);
    case "subtraction":
      return subtractNumbers(num1, num2);
    case "multiplication":
      return multiplyNumbers(num1, num2);
  }
}
