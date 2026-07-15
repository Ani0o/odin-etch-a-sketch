const grid = document.querySelector("#grid");

grid.setAttribute("style", "height: 640px; width: 640px;")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("style", "height: 40px; width: 40px; border: 1px solid black; box-sizing: border-box;");

    square.addEventListener("mouseenter", (event) => {
        square.classList.add("hover");
    })
    
    grid.appendChild(square);
}