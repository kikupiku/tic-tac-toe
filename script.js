let playerXisOn;
let playerOisOn;

function getBox(boxId) {
  let num = document.getElementById(boxId);

  return {
    num,
  };
}

let startBoard = document.getElementById('starting-board');
let startButton = document.getElementById('start');
let whichPlayer = document.getElementById('player');
let message = document.getElementById('turn-or-win');
let replay = document.getElementById('replay');
let statusBar = document.getElementById('turn-container');

(function triggerBeginning() {

  let _oneVsPC = document.getElementById('one-player');
  let _oneVsOne = document.getElementById('two-players');
  startButton.addEventListener('click', () => {

    if (_oneVsOne.checked) {
      drawOnBoard();
      statusBar.style.display = 'block';
      startBoard.style.display = 'none';
    } else if (_oneVsPC.checked) {
      console.log('under construction');
    }

  });
})();

function makeAMove(whichBox) {
  playerOisOn ? playerXisOn = false : playerXisOn;
  playerXisOn ? playerOisOn = false : playerOisOn;

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
}

let play = function (event) {
  let whichBox = event.currentTarget;
  makeAMove(whichBox);
};

function drawOnBoard() {
  playerXisOn = false;
  playerOisOn = true;

  for (let i = 1; i <= 9; i++) {
    let whichBox = getBox(`box${i}`).num;
    whichBox.addEventListener('click', play);
  }
}

function checkIfWin() {

  function getWinLine(idString) {
    let line = document.getElementById(idString);

    return {
      line,
    };
  }

  function checkMark(box, mark) {
    let _boxClass = box.firstElementChild.classList;
    let fullBox = _boxClass.contains(mark);

    return {
      fullBox,
    };
  };

  function triggerWin(player, line) {
    whichPlayer.innerHTML = player;
    message.innerHTML = 'You win!';

    for (let i = 1; i <= 9; i++) {
      let whichBox = getBox(`box${i}`).num;
      whichBox.removeEventListener('click', play);
    }

    replay.style.display = 'inline-block';
    reset(line);
  }

  let isItATie = function () {
    let boxes = [];
    let tie;
    for (let i = 1; i <= 9; i++) {
      if (getBox(`box${i}`).num.firstElementChild.hasAttribute('class')) {
        boxes.push(getBox(`box${i}`).num);
      }
    }

    console.log(boxes);
    if (boxes.length === 9) {
      tie = true;
    }

    return {
      tie,
    };
  };

  if ((checkMark(box1, 'circle').fullBox) &&
      (checkMark(box2, 'circle').fullBox) &&
      (checkMark(box3, 'circle').fullBox)) {
    triggerWin('player O', 'top-hor');
    getWinLine('top-hor').line.style.display = 'block';
  } else if ((checkMark(box4, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox)) {
    triggerWin('player O', 'mid-hor');
    getWinLine('mid-hor').line.style.display = 'block';
  } else if ((checkMark(box7, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'bot-hor');
    getWinLine('bot-hor').line.style.display = 'block';
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box4, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O', 'left-vert');
    getWinLine('left-vert').line.style.display = 'block';
  } else if ((checkMark(box2, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox)) {
    triggerWin('player O', 'mid-vert');
    getWinLine('mid-vert').line.style.display = 'block';
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'right-vert');
    getWinLine('right-vert').line.style.display = 'block';
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'down-to-right');
    getWinLine('down-to-right').line.style.display = 'block';
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O', 'up-to-right');
    getWinLine('up-to-right').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box3, 'x-mark').fullBox)) {
    triggerWin('player X', 'top-hor');
    getWinLine('top-hor').line.style.display = 'block';
  } else if ((checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox)) {
    triggerWin('player X', 'mid-hor');
    getWinLine('mid-hor').line.style.display = 'block';
  } else if ((checkMark(box7, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'bot-hor');
    getWinLine('bot-hor').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X', 'left-vert');
    getWinLine('left-vert').line.style.display = 'block';
  } else if ((checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox)) {
    triggerWin('player X', 'mid-vert');
    getWinLine('mid-vert').line.style.display = 'block';
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'right-vert');
    getWinLine('right-vert').line.style.display = 'block';
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'down-to-right');
    getWinLine('down-to-right').line.style.display = 'block';
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X', 'up-to-right');
    getWinLine('up-to-right').line.style.display = 'block';
  } else if (isItATie().tie === true) {
    whichPlayer.innerHTML = 'It\'s a tie';
    message.innerHTML = 'replay?';
    replay.style.display = 'inline-block';
    reset('top-hor');
  }

  function reset(line) {
    replay.addEventListener('click', () => {
      let _winLine = document.getElementById(line);
      _winLine.style.removeProperty('display');
      _winLine.style.display = 'none';

      for (let i = 1; i <= 9; i++) {
        getBox(`box${i}`).num.firstElementChild.removeAttribute('class');
        getBox(`box${i}`).num.firstElementChild.setAttribute('src', './assets/transparent.png');
      }

      whichPlayer.innerHTML = 'Player O'
      message.innerHTML = 'It\'s your turn!';
      drawOnBoard();
      replay.style.display = 'none';
    });

  };

}
