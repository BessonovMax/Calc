let firstNum = "";
let secondNum = "";
let operator = "";
let gottenResult = false;
let display = document.querySelector(".display");
display.textContent = "0";
let equalBtn = document.querySelector(".equal");
let numBtns = document.querySelectorAll(".number");
let operateBtns = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear-btn");
let clearEntryBtn = document.querySelector(".clear-entry-btn");
let symbol = document.querySelector(".operator-symbol");
const dotBtn = document.querySelector(".dot");
const plusMinisBtn = document.querySelector(".plus-minus");
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

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  console.log(e.key);
  switch (e.code) {
    case "Digit0":
    case "Numpad0":
      numBtns[9].click();
      break;
    case "Digit1":
    case "Numpad1":
      numBtns[0].click();
      break;
    case "Digit2":
    case "Numpad2":
      numBtns[1].click();
      break;
    case "Digit3":
    case "Numpad3":
      numBtns[2].click();
      break;
    case "Digit4":
    case "Numpad4":
      numBtns[3].click();
      break;
    case "Digit5":
    case "Numpad5":
      numBtns[4].click();
      break;
    case "Digit6":
    case "Numpad6":
      numBtns[5].click();
      break;
    case "Digit7":
    case "Numpad7":
      numBtns[6].click();
      break;
    case "Digit8":
    case "Numpad8":
      numBtns[7].click();
      break;
    case "Digit9":
    case "Numpad9":
      numBtns[8].click();
      break;
    case "NumpadAdd":
    case "NumpadSubtract":
    case "NumpadMultiply":
    case "NumpadDivide":
      operateBtns.forEach((element) => {
        if (element.value == "division") {
          element.click();
        }
        if (element.value == "multiplication") {
          element.click();
        }
        if (element.textContent === e.key) {
          element.click();
        }
      });
      break;
    case "NumpadEnter":
    case "Enter":
      equalBtn.click();
      break;
    case "NumpadDecimal":
    case "Period":
      dotBtn.click();
      break;
    case "Backspace":
      if (!secondNum) {
        firstNum = firstNum.slice(0, -1);
        if (firstNum === "") {
          display.textContent = "0";
        } else {
          display.textContent = firstNum;
        }
      } else if (secondNum) {
        secondNum = secondNum.slice(0, -1);
        if (secondNum === "") {
          display.textContent = "0";
        } else {
          display.textContent = secondNum;
        }
      }
      break;
  }
});
plusMinisBtn.addEventListener("click", (e) => {
  if (firstNum && !operator && !gottenResult && display.textContent !== "0") {
    if (firstNum.startsWith("-")) {
      firstNum = firstNum.slice(1);
      display.textContent = firstNum;
    } else {
      firstNum = "-" + firstNum;
      display.textContent = firstNum;
    }
  } else if (firstNum && operator && secondNum && display.textContent !== "0") {
    if (secondNum.startsWith("-")) {
      secondNum = secondNum.slice(1);
      display.textContent = secondNum;
    } else {
      secondNum = "-" + secondNum;
      display.textContent = secondNum;
    }
  }
});

dotBtn.addEventListener("click", (e) => {
  if (!firstNum) {
    firstNum = "0.";
    display.textContent = firstNum;
  } else if (firstNum && !operator) {
    if (!firstNum.includes(".")) {
      firstNum = firstNum + ".";
      display.textContent = firstNum;
    }
  } else if (!secondNum) {
    secondNum = "0.";
    display.textContent = secondNum;
  } else if (secondNum && operator) {
    if (!secondNum.includes(".")) {
      secondNum = secondNum + ".";
      display.textContent = secondNum;
    }
  }
});

clearBtn.addEventListener("click", () => {
  window.location.reload();
});

clearEntryBtn.addEventListener("click", () => {
  if (firstNum && !operator && !gottenResult) {
    firstNum = "";
    display.textContent = "0";
  } else if (firstNum && operator && !secondNum) {
    display.textContent = "0";
  } else if (secondNum && operator) {
    secondNum = "";
    display.textContent = "0";
  } else if (gottenResult) {
    gottenResult = false;
    firstNum = "";
    secondNum = "";
    operator = "";
    symbol.textContent = "";
    display.textContent = "0";
  }
});

operateBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (firstNum && secondNum && operator) {
      //check if the user is trying to divide by 0
      if (operator === "division" && secondNum === "0") {
        alert("You can't divide by 0!");
        return;
      }
      let result = operate(firstNum, secondNum, operator);

      if (!Number.isInteger(result)) {
        result = result.toFixed(2); // round to 2 decimal places
      }
      display.textContent = result;
      firstNum = result;
      symbol.textContent = `${symbol.textContent} ${secondNum} = `;
      secondNum = "";
    }
    if (!firstNum) {
      return;
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
    let result = operate(firstNum, secondNum, operator);
    if (!Number.isInteger(result)) {
      result = result.toFixed(2); // round to 2 decimal places
    }
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
