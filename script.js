let displayValue = '';
let operator = '';
let firstOperand = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = '';
  operator = '';
  updateDisplay();
}

function setOperator(op) {
  if (operator !== '' && displayValue !== '') {
    calculateResult();
  }
  operator = op;
  if (displayValue !== '') {
    firstOperand = displayValue;
    displayValue = '';
  }
}

function calculateResult() {
  if (operator !== '' && firstOperand !== '' && displayValue !== '') {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(displayValue);
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    displayValue = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
