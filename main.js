createBoard(16);

let newBoard = document.querySelector(".new-board");
newBoard.addEventListener("click", () => {
    let num = boardSize();
    createBoard(num);
})

function createBoard(num) {
    const grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    let numSquare = num * num

    for (let i = 0; i < numSquare; i++) {
        let pixel = document.createElement("div");
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = 'black';
        });
        pixel.className = "grid-pixel";
        grid.appendChild(pixel);
    }
}


function boardSize() {
    let input = prompt("Select the size of the board", 2);
    if (input === "") {
        alert("Please provide a valid number between 2 and 100")
    } else if (input < 2 || input > 100) {
        alert("Provide a number between 2 and 100");
    } else {
        alert(`Generating ${input} by ${input} canvas. Enjoy!`)
        return input;
    }
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white");
}