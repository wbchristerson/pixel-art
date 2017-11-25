// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let colorValue = '#000000';

function makeGrid() {
  let rows = $( '#input_height' ).val();
  let cols = $( '#input_width' ).val();
  let canvas = $( '#pixel_canvas' );
  let cellRow;
  canvas.children().remove();
  for (let i = 0; i < rows; i = i + 1) {
    canvas.append( '<tr></tr>' );
    for (let j = 0; j < cols; j = j + 1) {
      cellRow = $( 'tr' ).last();
      cellRow.append( '<td></td>' );
      /*
      cellRow.last().on('click', function() {
        event.preventDefault();
        $( this ).css( 'background-color: #a3e461');
      });
      */

    }
  }

}


$( '#sizePicker' ).on( 'submit', function() {
  event.preventDefault();
  makeGrid();
});

$( '#pixel_canvas' ).on('click', 'td', function() {
  event.preventDefault();
  $( this ).css( 'background-color', colorValue );
});
