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
  let oMark = document.createElement('img');
  let xMark = document.createElement('img');

  oMark.className += 'circle ';
  oMark.className += 'game-mark';
  oMark.setAttribute('src', './assets/circle.png');

  xMark.className += 'x-mark ';
  xMark.className += 'game-mark';
  xMark.setAttribute('src', './assets/x-mark.png');

  return {
    xMark, oMark,
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
        playerOisOn ? this[whichBox].appendChild(mark.oMark)
              : this[whichBox].appendChild(mark.xMark);
      }

      if (playerOisOn) {
        playerXisOn = true;
        playerOisOn = false;
      } else {
        playerOisOn = true;
        playerXisOn = false;
      }

      checkIfWin();
    });

  }
}

drawOnBoard();

function checkIfWin() {
  let top = document.getElementById('top-hor');
  let midHorizontal = document.getElementById('mid-hor');
  let bottom = document.getElementById('bot-hor');
  let left = document.getElementById('left-vert');
  let midVertical = document.getElementById('mid-vert');
  let right = document.getElementById('right-vert');
  let downToRight = document.getElementById('across-down-to-right');
  let upToRight = document.getElementById('across-up-to-right');

  function checkBoxChildren() {
    let box1mark = box1.firstChild.classList;
    let box2mark = box2.firstChild.classList;
    let box3mark = box3.firstChild.classList;
    let box4mark = box4.firstChild.classList;
    let box5mark = box5.firstChild.classList;
    let box6mark = box6.firstChild.classList;
    let box7mark = box7.firstChild.classList;
    let box8mark = box8.firstChild.classList;
    let box9mark = box9.firstChild.classList;

    return {
      box1mark, box2mark, box3mark, box4mark, box5mark, box6mark, box7mark, box8mark, box9mark,
    };
    // the way to repair it - all boxes should have empty img elements and only fill them with src upon click, that way no null will come up
  }
  let boxChild = checkBoxChildren();

  if (box1.hasChildNodes && box2.hasChildNodes && box3.hasChildNodes) {
    console.log('they all have children');
    if ((boxChild.box1mark.contains('circle')) &&
         (boxChild.box2mark.contains('circle')) &&
         (boxChild.box3mark.contains('circle'))) {
      console.log('o wins');
      top.style.display = 'block';
    }
  } else {
    console.log('they do not all have children');
  }

  // } else if ((box4mark.contains('circle')) &&
  //            (box5mark.contains('circle')) &&
  //            (box6mark.contains('circle'))) {
  //   midHorizontal.style.display = 'block';
  // } else if ((box7mark.contains('circle')) &&
  //            (box8mark.contains('circle')) &&
  //            (box9mark.contains('circle'))) {
  //   bottom.style.display = 'block';
  // } else if ((box1mark.contains('circle')) &&
  //            (box4mark.contains('circle')) &&
  //            (box7mark.contains('circle'))) {
  //   left.style.display = 'block';
};
