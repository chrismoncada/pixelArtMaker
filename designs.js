// Select color input
function color() {
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('click', function(){});
}

// Select size input
function size() {
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
}

// When size is submitted by the user, call makeGrid()
function heightWidth () {
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
makeGrid(height, width);
}

//loop
function makeGrid() {
  for (let i = 1; i <= 1; i++);
  const createRow = document.createElement('tr');
  createRow.addEventListener('click', function(){});
  pixelCanvas.appendChild(createRow);
  for (let l = 1; l <= 1; l++) {
    const createCell = document.createElement('td');
    createCell.addEventListener('click', function(){});
    pixelCanvas.appendChild(createCell);
}
}



// default sizing of makeGrid
makeGrid(8, 8)
