const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

let currentInput = '';
let previousInput = '';
let operation = null;
let resetDisplay = false;


buttons.addEventListener('click', (e) => {
  const target = e.target;


  if (target.hasAttribute('data-num')) {
    const num = target.getAttribute('data-num');
    inputNumber(num);
  }


  if (target.hasAttribute('data-action')) {
    const action = target.getAttribute('data-action');
    handleAction(action);
  }
});

function inputNumber(num) {
  if (resetDisplay) {
    currentInput = num;
    resetDisplay = false;
  } else {
  
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
  }
  updateDisplay();
}

function handleAction(action) {
  switch (action) {
    case 'clear':
      currentInput = '';
      previousInput = '';
      operation = null;
      updateDisplay();
      break;

    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      setOperation(action);
      break;

    case 'equals':
      calculate();
      break;

    case 'percent':
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
      break;
  }
}

function setOperation(op) {
  if (currentInput === '') return;

  if (previousInput !== '' && !resetDisplay) {
    calculate();
  }

  operation = op;
  previousInput = currentInput;
  resetDisplay = true;
}

function calculate() {
  if (operation === null || resetDisplay) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result = 0;

  switch (operation) {
    case 'add':
      result = prev + current;
      break;
    case 'subtract':
      result = prev - current;
      break;
    case 'multiply':
      result = prev * current;
      break;
    case 'divide':
      if (current === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }


  currentInput = parseFloat(result.toFixed(8)).toString();
  operation = null;
  previousInput = '';
  resetDisplay = true;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput || '0';
}