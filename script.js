let playerXisOn = false;
let playerOisOn = true;

function getBox(boxId) {
  let num = document.getElementById(boxId);

  return {
    num,
  };
}

let whichPlayer = document.getElementById('player');
let message = document.getElementById('turn-or-win');

let play = function (event) {
  console.log(event.currentTarget);
  let whichBox = event.currentTarget;

  playerOisOn ? playerXisOn = false : playerXisOn;
  playerXisOn ? playerOisOn = false : playerOisOn;

  console.log(whichBox.firstElementChild);
  if (whichBox.firstElementChild.hasAttribute('class')) {
    console.log('Clicked again in the same box. Doing nothing.');
  } else {
    if (playerOisOn) {
      let oMark = whichBox.firstElementChild;
      oMark.setAttribute('src', './assets/circle.png');
      oMark.className += 'circle ';
      oMark.className += 'game-mark';
    } else {
      let xMark = whichBox.firstElementChild;
      xMark.setAttribute('src', './assets/x-mark.png');
      xMark.className += 'x-mark ';
      xMark.className += 'game-mark';
    }

    if (playerOisOn) {
      playerXisOn = true;
      playerOisOn = false;
      whichPlayer.innerHTML = 'Player X,';
    } else {
      playerOisOn = true;
      playerXisOn = false;
      whichPlayer.innerHTML = 'Player O,';
    }
  }

  checkIfWin();
};

function drawOnBoard() {

  for (let i = 1; i <= 9; i++) {
    let whichBox = getBox(`box${i}`).num;
    whichBox.addEventListener('click', play);
  }
}

drawOnBoard();

function checkIfWin() {

  function getWinLine(idString) {
    let line = document.getElementById(idString);

    return {
      line,
    };
  }

  function checkMark(box, mark) {
    let _boxMark = box.firstElementChild.classList;
    let fullBox = _boxMark.contains(mark);

    return {
      fullBox,
    };
  };

  function triggerWin(player) {
    whichPlayer.innerHTML = player;
    message.innerHTML = 'You win!';

    for (let i = 1; i <= 9; i++) {
      let whichBox = getBox(`box${i}`).num;

      whichBox.removeEventListener('click', play);
    }
  }

  if ((checkMark(box1, 'circle').fullBox) &&
      (checkMark(box2, 'circle').fullBox) &&
      (checkMark(box3, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('top-hor').line.style.display = 'block';
  } else if ((checkMark(box4, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('mid-hor').line.style.display = 'block';
  } else if ((checkMark(box7, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('bot-hor').line.style.display = 'block';
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box4, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('left-vert').line.style.display = 'block';
  } else if ((checkMark(box2, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('mid-vert').line.style.display = 'block';
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('right-vert').line.style.display = 'block';
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('down-to-right').line.style.display = 'block';
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O');
    getWinLine('up-to-right').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box3, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('top-hor').line.style.display = 'block';
  } else if ((checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('mid-hor').line.style.display = 'block';
  } else if ((checkMark(box7, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('bot-hor').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('left-vert').line.style.display = 'block';
  } else if ((checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('mid-vert').line.style.display = 'block';
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('right-vert').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('down-to-right').line.style.display = 'block';
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X');
    getWinLine('up-to-right').line.style.display = 'block';
  }

  return {
    checkMark,
  };
}
