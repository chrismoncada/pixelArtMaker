// Select color input
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('click', function(){});


// Select size input
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');


// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};

function makeGrid() {
  for (let i = 1; i <= 1; i++);
  const createRow = document.createElement('tr');
  createRow.addEventListener('click', function(){});
  for (let l = 1; l <= 1; l++) {
    const createCell = document.createElement('td');
    createCell.addEventListener('click', function(){});
}
}


// default sizing of makeGrid
makeGrid(8, 8);
