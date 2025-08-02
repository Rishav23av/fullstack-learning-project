// Game variables
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Winning conditions
const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// DOM elements
const statusDisplay = document.querySelector('.status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('.restart-btn');

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);

// Functions
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    
    // Check if cell is already filled or game is inactive
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }
    
    // Update game state and UI
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    
    // Check result
    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningLine = null;
    
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const condition = gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        
        if (condition) {
            roundWon = true;
            winningLine = winningConditions[i];
            break;
        }
    }
    
    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} has won!`;
        gameActive = false;
        
        // Highlight winning cells
        if (winningLine) {
            winningLine.forEach(index => {
                document.querySelector(`[data-cell-index="${index}"]`).classList.add('winning-cell');
            });
        }
        return;
    }
    
    // Check for draw
    if (!gameState.includes('')) {
        statusDisplay.textContent = 'Game ended in a draw!';
        gameActive = false;
        return;
    }
    
    // Continue game with next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    
    // Reset cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winning-cell');
    });
}