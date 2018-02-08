$( document ).ready(function() {
  getSquares();
  clearAll();
  colorOrNot()
});

let gameScreen = document.getElementById('game-screen');
let clear = document.getElementById('clear');
let color = document.getElementById('color');

/* Getting amount of squares */


function getSquares() {
  $('#grid-form').keyup(function(e) {
    if (e.keyCode == 13) {
      $('div').remove('.squares');
      squareTotal = document.getElementById('grid-form').value;
      if (squareTotal > 50) {
        alert('Please give a number of 50 or less!');
      } else {
        let s = 100 / squareTotal;
        for (var i = 0; i < (squareTotal*squareTotal); i++) {
          $("<div class='squares' style='width:" + s + "%; height:" + s + "%'></div>").appendTo(gameScreen);
          }

        changeBG();
       }
    }
  })
}

function clearAll() {
  $(clear).on('click', function() {
    $('.squares').remove();
  })
}

function changeBG() {
  $('.squares').hover(function() {
    $(this).css('background-color', 'black');
  })
}

function colorOrNot() {
  $(color).click(function() {
      color.textContent = "Pencil";
  })
}
