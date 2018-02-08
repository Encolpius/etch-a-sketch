$( document ).ready();

let grid = document.getElementById('grid');

/* Getting amount of squares */
function getSquares() {
  $('#grid-form').keyup(function(e) {
    if (e.keyCode == 13) {
      console.log('you pressed enter');
    }
  })
};

getSquares();
