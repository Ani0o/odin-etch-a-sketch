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

        const randomRed =  Math.floor(Math.random() * 256);
        const randomGreen =  Math.floor(Math.random() * 256);
        const randomBlue =  Math.floor(Math.random() * 256);
        let opacity = window.getComputedStyle(event.target).opacity;

        event.target.style.setProperty("--random-color", `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`);
        event.target.style.setProperty("--opacity", Number(opacity) + 0.1);
    }
})