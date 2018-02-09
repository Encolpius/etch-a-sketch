/* Start */
$( document ).ready(function() {
  start();
  clearAll();
  change();
});

let gameScreen = document.getElementById('game-screen');
let clear = document.getElementById('clear');
let colorButton = document.getElementById('color-button');
var checkBackground = "";
var squareTotal = 30;


/* Getting amount of squares */
function start() {
  checkBackground = 'black'
  let s = 100 / 30;
  for (var i = 0; i < (30*30); i++) {
    $("<div class='squares' style='width:" + s + "%; height:" + s + "%'></div>").appendTo(gameScreen);
  }
  black();
  getSquares();
}


/* Clicking The Grid Button */
function getSquares() {
  $('#grid-button').click(function(e) {
      squareTotal = prompt("How many squares would you like?")
      validate();
      $('div').remove('.squares');
      computeSquares();
      current();
  })
}

function validate() {
  while (squareTotal < 1 || squareTotal > 50 || squareTotal % 1 != 0) {
    squareTotal = prompt('Please enter an integer between 1 and 50.')
  }
}

/* Clearing Current Squares */
function clearAll() {
  $(clear).on('click', function() {
    $('.squares').remove();
    $('.box').addClass('shake-slow');
    setTimeout(function() {
      $('.box').removeClass('shake-slow');
    }, 600);
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
  if (checkBackground === 'black') {
    return black();
  } else if (checkBackground === 'colored') {
    return colors();
  }
}

/* Backgrounds */
function black() {
  darken = true;
  $('.squares').mouseenter(function() {
    $(this).addClass('black')
    if (darken == true) {
    let currentColor = $(this).css('background-color');
    currentColor = currentColor.substring(currentColor.indexOf('(') +
             1, currentColor.lastIndexOf(')')).split(",");
    redValue = currentColor[0];
    greenValue = currentColor[1];
    blueValue = currentColor[2];
    if (redValue >= 10)  redValue -= 10;
    if (greenValue >= 10)  greenValue -= 10;
    if (blueValue >= 10)  blueValue -= 10;
    wantedColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    $(this).css('background-color', wantedColor);
    };
  });
};

function colors() {
  darken = false;
  $('.squares').mouseenter(function() {
    $(this).css('background-color', random_bg_color());
  })
}

/* Getting The Random Color */
function random_bg_color() {
    bgColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    return bgColor;
}

/* Changing To Color And Back */
function change() {
  $(colorButton).click(function() {
    if (checkBackground === 'black') {
      checkBackground = 'colored';
      colorButton.textContent = "Back To Black!";
      $('.squares').remove();
      computeSquares();
      current();
    } else if (checkBackground === 'colored') {
      checkBackground = 'black';
      colorButton.textContent = "Change To Color!";
      $('.squares').remove();
      computeSquares();
      current();
    }
  })
}
