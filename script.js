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

grid.addEventListener("mouseover", (event) => {
    
    if (event.target.classList.contains("hover")) {

        // The number 16777215 comes from the fact that the red, green and blue values each range
        // from 0 to 255 so the total number of possible color combinations are 256 x 256 x 256 = 16,777,216.
        // By multiplying by 16777215, we map the random decimal to a range between 0 and 16777215.

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        event.target.style.setProperty("--random-bg", randomColor);
    }
})