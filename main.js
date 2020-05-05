const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winMessageElement = document.getElementById("winMessage")
const WINNING_COMBINTATION = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const winMessage = document.querySelector("[data-win-message-text]")
let i;

cells.forEach(cell => {
    cell.addEventListener("click", handleClick, { once: true})
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = i? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    }
    // Check for win
    // check for draw
    swap();
    setBoardHoverClass();
}

function endGame(draw) {
    if (draw) {

    } else  {
        winningMessageTextElement.innerText = i ? "O's Wins!" : "X's Wins!"
    }
    winMessage.classList.add("show")
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swap() {
    i = !i
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (i) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    WINNING_COMBINTATION.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}