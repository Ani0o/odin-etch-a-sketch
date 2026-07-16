const grid = document.querySelector("#grid");
const sizeButton = document.querySelector("#size-button");

const gridSize = "640px";
grid.setAttribute("style", `height: ${gridSize}; width: ${gridSize};`);

sizeButton.addEventListener("click", (event) => {
    grid.replaceChildren();

    let numberOfSquares = prompt("Enter the number of squares (1-100) : ", "1");
    numberOfSquares = parseInt(numberOfSquares, 10);

    if (numberOfSquares < 1 || numberOfSquares > 100) alert("Invalid Size!");
    else {
        let squareSize = parseInt(gridSize, 10) / numberOfSquares;
        squareSize = String(squareSize) + "px";

        for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
            const square = document.createElement("div");
            square.setAttribute("style", `height: ${squareSize}; width: ${squareSize}; border: 1px solid black; box-sizing: border-box;`);

            square.addEventListener("mouseover", (event) => {
                square.classList.add("hover");
            })
            
            grid.appendChild(square);
        }
    }
})