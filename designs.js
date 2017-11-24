// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let rows = $( '#input_height' ).val();
  let cols = $( '#input_width' ).val();
  let canvas = $( '#pixel_canvas' );
  canvas.children().remove();
  for (let i = 0; i < rows; i = i + 1) {
    canvas.append( '<tr></tr>' );
    for (let j = 0; j < cols; j = j + 1) {
      $( 'tr' ).last().append( '<td></td>' );
    }
  }

}


$( '#sizePicker' ).on( 'submit', function() {
  event.preventDefault();
  makeGrid();
});
