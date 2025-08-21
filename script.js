let SQUARE_COUNT = 16;
let SIDE_LENGTH = window.innerHeight * 0.9 / SQUARE_COUNT;

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
    num = Math.min(num, 128);
    SIDE_LENGTH = window.innerHeight * 0.9 / num;

    container.innerHTML = "";
    for (let i = 1; i <= num; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "row")
        for (let j = 1; j <= num; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.style.boxSizing = "border-box";
            cell.style.width = SIDE_LENGTH + "px";
            cell.style.height = SIDE_LENGTH + "px";
            cell.style.backgroundColor = "beige";
            cell.style.opacity = 1;
            rowContainer.appendChild(cell);
        }
        container.appendChild(rowContainer);
    }
    let cellArray = Array.from(container.querySelectorAll(".cell"));
    for (const cell of cellArray) {
        cell.addEventListener("mouseenter", function(element) {
            if (cell.style.backgroundColor == "beige") {
                cell.style.backgroundColor = generateRandomRgbColor();
            } else {
                let currentColor = cell.style.backgroundColor; 
                let darkerColor = darkenRgb(currentColor, 0.1); 
                cell.style.backgroundColor = darkerColor;
            }
        });
    }
}

function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 

  return `rgb(${r},${g},${b})`;
}

function darkenRgb(rgbString, factor) {
    let rgb = rgbString.match(/\d+/g).map(Number);
    let [r, g, b] = rgb.map(val => Math.max(0, val * (1 - factor)));
    return `rgb(${r}, ${g}, ${b})`;
}

