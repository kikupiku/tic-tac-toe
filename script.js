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

// function createMarks() {
//
//   //   let oMark =
//   //   let xMark =
//   // this[whichBox].firstChild.setAttribute('src', './assets/circle.png');
//   // this[whichBox].firstChild.setAttribute('src', './assets/x-mark.png');
//
//   oMark.className += 'circle ';
//   oMark.className += 'game-mark';
//
//   xMark.className += 'x-mark ';
//   xMark.className += 'game-mark';
//
//   return {
//     xMark, oMark,
//   };
// }

function drawOnBoard() {
  let playerXisOn = false;
  let playerOisOn = true;

  for (let i = 1; i <= 9; i++) {

    let whichBox = `box${i}`;
    this[whichBox].addEventListener('click', () => {
      playerOisOn ? playerXisOn = false : playerXisOn;
      playerXisOn ? playerOisOn = false : playerOisOn;

      // let mark = createMarks();
      console.log(this[whichBox].firstElementChild);
      if (this[whichBox].firstElementChild.hasAttribute('src')) {
        console.log('Clicked again in the same box. Doing nothing.');
      } else {
        if (playerOisOn) {
          let oMark = this[whichBox].firstElementChild;
          oMark.setAttribute('src', './assets/circle.png');
          oMark.className += 'circle ';
          oMark.className += 'game-mark';
        } else {
          let xMark = this[whichBox].firstElementChild;
          xMark.setAttribute('src', './assets/x-mark.png');
          xMark.className += 'x-mark ';
          xMark.className += 'game-mark';
        }
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
    let box1mark = box1.firstElementChild.classList;
    let box2mark = box2.firstElementChild.classList;
    let box3mark = box3.firstElementChild.classList;
    let box4mark = box4.firstElementChild.classList;
    let box5mark = box5.firstElementChild.classList;
    let box6mark = box6.firstElementChild.classList;
    let box7mark = box7.firstElementChild.classList;
    let box8mark = box8.firstElementChild.classList;
    let box9mark = box9.firstElementChild.classList;

    return {
      box1mark, box2mark, box3mark, box4mark, box5mark, box6mark, box7mark, box8mark, box9mark,
    };

    // the way to repair it - all boxes should have empty img elements and only
    // fill them with src upon click, that way no null will come up

  }

  let boxChild = checkBoxChildren();


  if ((boxChild.box1mark.contains('circle')) &&
       (boxChild.box2mark.contains('circle')) &&
       (boxChild.box3mark.contains('circle'))) {
    console.log('o wins');
    top.style.display = 'block';
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
