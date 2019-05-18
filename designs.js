// window.onload;

let table  = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('submit');

// Assign event to "submit query" button

sizePicker.addEventListener('click', (e) => { 

// Prevents page from refreshing when "submit query" is clicked
    
    e.preventDefault();
    
// First child of table is table body
// Stops multiple table bodies from being added when "submit" is clicked
    
    table.firstElementChild.remove();
    
// Select size input
// Store the value of height as selected by user
    
    let height = document.getElementById('inputHeight').value;

// Store the value of width as selected by user
    
    let width = document.getElementById('inputWidth').value;
    
// calls function
    
    makeGrid(height, width);
    
});





// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    
// Your code goes here!
// Create rows and columns
    
    for (let rows = 0; rows < height; rows++) {
        let row = table.insertRow(rows);
        for (var columns = 0; columns < width; columns++) {
            let cell = row.insertCell(columns);
            
// Allow user to color each, individual cell
            
            cell.addEventListener('click', (e) => {  
                let color = document.getElementById('colorPicker');
                cell.style.backgroundColor = color.value;
            });
        }
    }
};
