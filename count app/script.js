
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');


let count = 0;


function updateDisplay() {
    countElement.textContent = count;
}


incrementButton.addEventListener('click', function() {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', function() {
    count--;
    updateDisplay();
});

resetButton.addEventListener('click', function() {
    count = 0;
    updateDisplay();
});