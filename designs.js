// Select color input
function changeColor () {
const color = document.getElementById('colorPicker').value;
};

// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    pixelCanvas.innerHTML = "";
    makeGrid();
};

// Select size input

function makeGrid() {
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;

  // table reference
  pixelCanvas = document.getElementById('pixelCanvas');
  for (var r = 0; r < width; r++) {
    var current_row = document.createElement('tr');
    for (var c = 0; c < height; c++) {
      var current_cell = document.createElement('td');
      current_cell.addEventListener("click", function(event) {
        var the_clicked_cell = event.target;
        console.log(the_clicked_cell.style.backgroundColor);
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
    })
    current_row.append(current_cell);
  }
  pixelCanvas.append(current_row);
}
}
