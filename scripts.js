function getCells(num) {
    let str = "";
    for(let i = 0; i < num; i++) {
        str += " auto ";
    }
}

function populatePlayArea(rows, columns) {
    const existingGrid = document.querySelector(".gridContainer");
    if(existingGrid !== null) {
        existingGrid.remove();
    }
    
    const playArea = document.querySelector(".playArea");   
    const grid = document.createElement("div");
    grid.classList.add("gridContainer");
    grid.style.display = "grid";
    grid.style.gridTemplateRows = getCells(rows);
    grid.style.gridTemplateColumns = getCells(columns);
    grid.style.height = "100%";
    grid.style.width = "100%";

    for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
        for(let colIndex = 0; colIndex < columns; colIndex++) {
            let cell = document.createElement("div");
            cell.style.gridRow = rowIndex+1;
            cell.style.gridColumn = colIndex+1;
            // cell.textContent = `${rowIndex+1},${colIndex+1}`;

            cell.addEventListener("mouseenter", function () {
                this.style.backgroundColor = cursorColor;
            });
            grid.appendChild(cell);            
        }
    }
    playArea.appendChild(grid);
}

function resetGrid() {
    let rows, cols;

    while(true) {
        
        rows = parseInt(prompt("How many Rows?"));
        cols = parseInt(prompt("How many Columns?"));

        if(isNaN(rows) || isNaN(cols)) {
            alert("Both Rows and Columns must be a whole number");
        } else {            
            populatePlayArea(rows, cols);
            break;
        }
    }
}



function randomColor() {
    randomize ? randomize = false : ramomize = true;
    cursorColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function setPen() {
    cursorColor = "black";
}

function setEraser() {
    cursorColor = "whitesmoke";
}

function addListeners() {
    let clearBtn = document.querySelector("#btnClear");
    let penBtn = document.querySelector("#btnPen");
    let randomBtn = document.querySelector("#btnRandom");
    let eraserBtn = document.querySelector("#btnEraser");

    clearBtn.addEventListener("click", resetGrid);
    penBtn.addEventListener("click", setPen);
    randomBtn.addEventListener("click", randomColor);
    eraserBtn.addEventListener("click", setEraser);
}

randomize = false;
cursorColor = "black";
addListeners();
populatePlayArea(16,16);
