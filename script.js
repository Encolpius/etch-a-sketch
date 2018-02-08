/* Start */
$( document ).ready(function() {
  start();
  clearAll();
  change();
});

let gameScreen = document.getElementById('game-screen');
let clear = document.getElementById('clear');
let colorButton = document.getElementById('color-button');
var checkBackground = "black";
var squareTotal = 30;

/* Getting amount of squares */
function start() {
  checkBackground = 'black'
  let s = 100 / 30;
  for (var i = 0; i < (30*30); i++) {
    $("<div class='squares' style='width:" + s + "%; height:" + s + "%'></div>").appendTo(gameScreen);
  }
  current();
  getSquares();
}


/* Clicking The Grid Button */
function getSquares() {
  $('#grid-button').click(function(e) {
      squareTotal = prompt("How many squares would you like?")
      $('div').remove('.squares');
      if (squareTotal > 50) {
        alert('Please give a number of 50 or less!');
      } else {
        computeSquares();
      }
      current();
  })
}

/* Clearing Current Squares */
function clearAll() {
  $(clear).on('click', function() {
    $('.squares').remove();
    computeSquares();
    current();
  })
}

/* Just the algorithm for squares */
function computeSquares() {
  let s = 100 / squareTotal;
  for (var i = 0; i < (squareTotal*squareTotal); i++) {
    $("<div class='squares' style='width:" + s + "%; height:" + s + "%'></div>").appendTo(gameScreen);
  }
}


/* Checking For The Current Color */
function current() {
  if (checkBackground == 'black') {
    return black();
  } else if (checkBackground == 'colored') {
    return colors();
  }
}

/* Backgrounds */
function black() {
  $('.squares').hover(function() {
    $(this).css('background-color', 'black');
  })
}

function colors() {
  $('.squares').hover(function() {
    $(this).css('background-color', random_bg_color());
  })
}

/* Getting The Random Color */
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

/* Changing To Color And Back */
function change() {
  $(colorButton).click(function() {
    if (checkBackground === 'black') {
      checkBackground = 'colored';
      colorButton.textContent = "Back To Black!";
      colors();
    } else if (checkBackground === 'colored') {
      checkBackground = 'black';
      colorButton.textContent = "Change To Color!";
      black();
    }
  })
}
