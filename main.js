let firstNum = "";
let secondNum = "";
let operator = "";
let gottenResult = false;
let display = document.querySelector(".display");
let equalBtn = document.querySelector(".equal");
let numBtns = document.querySelectorAll(".number");
let operateBtns = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear-btn");
let symbol = document.querySelector(".operator-symbol");

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
/// This function takes two numbers and an operator as arguments and returns the result of the operation.
function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
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

clearBtn.addEventListener("click", () => {
  window.location.reload();
});

operateBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (firstNum && secondNum && operator) {
      const result = operate(firstNum, secondNum, operator);
      display.textContent = result;
      firstNum = result;
      symbol.textContent = `${symbol.textContent} ${secondNum} = `;
      secondNum = "";
    }
    operator = e.target.value;
    symbol.textContent = `${firstNum} ${e.target.textContent}`;
  });
});

numBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (gottenResult && !operator) {
      firstNum = "";
      secondNum = "";
      gottenResult = false;
      symbol.textContent = "";
    }
    if (!operator) {
      firstNum = firstNum + e.target.value;
      display.textContent = firstNum;
    } else {
      secondNum = secondNum + e.target.value;
      display.textContent = secondNum;
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (firstNum && operator) {
    secondNum = display.textContent;
  }
  if (firstNum && secondNum && operator) {
    //check if the user is trying to divide by 0
    if (operator === "division" && secondNum === "0") {
      alert("You can't divide by 0!");
      return;
    }
    const result = operate(firstNum, secondNum, operator);
    display.textContent = result;
    firstNum = result;
    gottenResult = true;
    operator = "";
    symbol.textContent = `${symbol.textContent} ${secondNum} = `;
    secondNum = "";
  } else {
    alert("Please enter a number and an operator!");
  }
});
