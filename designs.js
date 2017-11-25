// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let colorValue = '#000000';

function makeGrid() {
  let rows = $( '#input_height' ).val();
  let cols = $( '#input_width' ).val();
  let canvas = $( '#pixel_canvas' );
  let cellRow;
  // remove current grid from screen if present
  canvas.children().remove();
  // generate new grid
  for (let i = 0; i < rows; i = i + 1) {
    canvas.append( '<tr></tr>' );
    for (let j = 0; j < cols; j = j + 1) {
      $( 'tr' ).last().append( '<td></td>' );
    }
  }
}

// make grid when 'submit' is clicked
$( '#sizePicker' ).on( 'submit' , function() {
  event.preventDefault();
  makeGrid();
});

// set color value when chosen from options
$( '#colorPicker' ).on( 'change' , function() {
  colorValue = $( this ).val();
});

// set background of cell as current colorValue when clicked
$( '#pixel_canvas' ).on( 'click' , 'td' , function() {
  event.preventDefault();
  $( this ).css( 'background-color' , colorValue );
});
