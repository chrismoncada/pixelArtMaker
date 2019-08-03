// Select color input
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('click', function(){});


// Select size input
const sizePicker = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};

function makeGrid() {
  height = document.getElementById('inputHeight');
  width = document.getElementById('inputWidth');
  // table reference
  pixelCanvas = document.getElementById('pixelCanvas');
  for (var r = 0; r < width; r++) {
    var current_row = document.createElement('tr');
    for (var c = 0; c < height; c++) {
      var current_cell = document.createElement('td');
      current_cell.addEventListener("click", function(event) {
        var the_clicked_cell = event.target;
        console.log(the_clicked_cell.style.backgroundColor)
    })
    current_row.append(current_cell);
  }
  pixelCanvas.append(current_row);
}
