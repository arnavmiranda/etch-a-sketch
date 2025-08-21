let SQUARE_COUNT = 16;

const container = document.querySelector(".container");
formGrid(SQUARE_COUNT);

const button = document.querySelector("button");
button.textContent = "square count = " + SQUARE_COUNT;
button.addEventListener("click", () => {
    let num = Number(prompt("enter number of squares in the grid: "));
    button.textContent = "square count = " + num;
    formGrid(num);
});

function formGrid(num) {
    container.innerHTML = "";
    for (let i = 1; i <= num; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "row")
        for (let j = 1; j <= num; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.style.boxSizing = "border-box";
            rowContainer.appendChild(cell);
        }
        container.appendChild(rowContainer);
    }
    let cellArray = Array.from(container.querySelectorAll(".cell"));
    for (const cell of cellArray) {
        cell.addEventListener("mouseenter", () => cell.classList.toggle("hoverGrid"));
        cell.addEventListener("mouseleave", () => cell.classList.toggle("hoverGrid"));
}


}

