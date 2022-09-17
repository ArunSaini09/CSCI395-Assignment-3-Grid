// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
    let grid = document.getElementById("grid");
    let row = grid.insertRow(-1);
    ++numRows;
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
    let row = document.getElementsByTagName("tr");
    for(let i = 0; i < row.length; i++ )
    {
        let cell = row[i].insertCell(-1);
        //give every cell an onclick event: change cell color to selected color
        cell.onclick = (click) => {
            let color = selectColor();
            cell.style.backgroundColor = color;
        };
    }
    ++numCols;
    
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
    let grid = document.getElementById("grid");
    grid.deleteRow(-1);
    --numRows;
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
    let rows = document.getElementsByTagName("tr");
    for(let i = 0; i < rows.length; i++)
    {
        rows[i].deleteCell(-1);
    }
    --numCols;
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
    return colorSelected;
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
    const cells = document.getElementsByTagName("td");
    let color = selectColor();
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].style.backgroundColor === "")
        {
            cells[i].style.backgroundColor = color;
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
    const cells = document.getElementsByTagName("td");
    let color = selectColor();
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = color;
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
    const cells = document.getElementsByTagName("td");
    for(let i = 0; i < cells.length; i++) {
        //can use removeProperty("property-name") as well
        cells[i].style.backgroundColor = "";
    }
}