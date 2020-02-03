let Gameboard = () => {
  let courseOfGame = [];
  return result;
};

let placeMarks = () => {
  let placement;
  return placement;
};

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box3 = document.getElementById('box3');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

function createMarks() {
  let circle = document.createElement('img');
  let xMark = document.createElement('img');

  circle.className += 'circle ';
  circle.className += 'game-mark';
  circle.setAttribute('src', './assets/circle.png');

  xMark.className += 'x-mark ';
  xMark.className += 'game-mark';
  xMark.setAttribute('src', './assets/x-mark.png');

  return {
    xMark, circle,
  };
}

function drawOnBoard() {
  let playerXisOn = false;
  let playerOisOn = true;

  for (let i = 1; i <= 9; i++) {

    let whichBox = `box${i}`;

    this[whichBox].addEventListener('click', () => {
      playerOisOn ? playerXisOn = false : playerXisOn;
      playerXisOn ? playerOisOn = false : playerOisOn;
      let mark = createMarks();

      if (this[whichBox].hasChildNodes()) {
        console.log('Clicked again in the same box. Doing nothing.');
      } else {
        playerOisOn ? this[whichBox].appendChild(mark.circle)
              : this[whichBox].appendChild(mark.xMark);
      }

      if (playerOisOn) {
        playerXisOn = true;
        playerOisOn = false;
      } else {
        playerOisOn = true;
        playerXisOn = false;
      }
    });

  }
}

drawOnBoard();

let winCondition = () => {
  
}
