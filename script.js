let whichPlayer = document.getElementById('player');
let message = document.getElementById('turn-or-win');
let replay = document.getElementById('replay');
let statusBar = document.getElementById('turn-container');
let startBoard = document.getElementById('starting-board');
let usedBoxes = [];
let win = false;
let validMove = true;
let mode;
let playerXisOn;
let playerOisOn;

(function begin() {
  let startButton = document.getElementById('start');
  let _oneVsPC = document.getElementById('one-player');
  let _oneVsOne = document.getElementById('two-players');
  let _smartPC = document.getElementById('smart-comp');

  startButton.addEventListener('click', () => {
    if (_oneVsOne.checked) {
      drawOnBoard('two');
      mode = 'two';
    } else if (_oneVsPC.checked) {
      drawOnBoard('one-dumb');
      mode = 'one-dumb';
    } else if (_smartPC.checked) {
      drawOnBoard('one-smart');
      mode = 'one-smart';
    }
  });
})();

function drawOnBoard(playerMode) {
  statusBar.style.display = 'block';
  startBoard.style.display = 'none';
  playerOisOn = true;
  playerXisOn = false;

  for (let i = 1; i <= 9; i++) {
    let whichBox = getBox(i);
    whichBox.addEventListener('click', makeATurn);
  }
}

function getBox(idNumber) {
  return document.getElementById(`box${idNumber}`);
}

const randomPlay = () => {
  let whichBox = pickRandomBox();
  makeAMove(whichBox);
};

function pickRandomBox() {
  let randomNumber = Math.floor((Math.random() * 9) + 1);
  let whichBox = getBox(randomNumber);
  return whichBox;
}

const makeATurn = event => {
  humanPlay(event.currentTarget);
  if (mode === 'one-dumb' && validMove && win === false) {
    dumbComputerPlay();
  } else if (mode === 'one-smart' && validMove) {
    smartComputerPlay();
  }
};

const humanPlay = (whichBox) => {
  makeAMove(whichBox);
  checkIfWin();
};

const dumbComputerPlay = () => {
  randomPlay();
  checkIfWin();
};

const smartComputerPlay = () => {
  smartPlay();
  checkIfWin();
};

function smartPlay() {
  let whichBox = determineBestMove(usedBoxes, true);
  makeAMove(whichBox);
}

let checkIfTerminalNode = () => {
  
  return {
    terminalNode,
  };
}

function determineBestMove(startingNode, maximizingPlayer) {
  let node = [...startingNode];
  if (node.length === 9 || terminalNode)
  //   function playAMockMove () {
  //     let areFull = [];
  //     for (let i = 1; i < 9; i++) {
  //       let _newFull = getBox(i).firstElementChild.hasAttribute('class');
  //       areFull.push(_newFull);
  //     }
  //       return
  //   }
  //
  //   return whichBox;
}

function makeAMove(whichBox) {
  playerOisOn ? playerXisOn = false : playerXisOn;
  playerXisOn ? playerOisOn = false : playerOisOn;

  if (playerOisOn && !whichBox.firstElementChild.hasAttribute('class')) {
    let oMark = whichBox.firstElementChild;
    oMark.setAttribute('src', './assets/circle.png');
    oMark.className += 'circle ';
    oMark.className += 'game-mark';
    playerXisOn = true;
    playerOisOn = false;
    whichPlayer.innerHTML = 'Player X,';
    usedBoxes.push(whichBox);
    console.log('first if triggered');
    validMove = true;
  } else if (playerXisOn && !whichBox.firstElementChild.hasAttribute('class')) {
    let xMark = whichBox.firstElementChild;
    xMark.setAttribute('src', './assets/x-mark.png');
    xMark.className += 'x-mark ';
    xMark.className += 'game-mark';
    playerOisOn = true;
    playerXisOn = false;
    whichPlayer.innerHTML = 'Player O,';
    usedBoxes.push(whichBox);
    console.log('second if triggered');
  } else if (playerOisOn && whichBox.firstElementChild.hasAttribute('class')
            && usedBoxes.includes(whichBox)) {
    console.log('Clicked again in the same box. Doing nothing.');
    validMove = false;
  } else {
    randomPlay();
    console.log('rando redid');
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
    message.innerHTML = 'wins!';

    for (let i = 1; i <= 9; i++) {
      let whichBox = getBox(i);
      whichBox.removeEventListener('click', humanPlay);
    }

    replay.style.display = 'inline-block';
    reset(line);
  }

  let isItATie = () => {
    let boxes = [];
    let tie;
    for (let i = 1; i <= 9; i++) {
      if (getBox(i).firstElementChild.hasAttribute('class')) {
        boxes.push(getBox(i));
      }
    }

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
    win = true;
  } else if ((checkMark(box4, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox)) {
    triggerWin('player O', 'mid-hor');
    getWinLine('mid-hor').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box7, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'bot-hor');
    getWinLine('bot-hor').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box4, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O', 'left-vert');
    getWinLine('left-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box2, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box8, 'circle').fullBox)) {
    triggerWin('player O', 'mid-vert');
    getWinLine('mid-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box6, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'right-vert');
    getWinLine('right-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box1, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box9, 'circle').fullBox)) {
    triggerWin('player O', 'down-to-right');
    getWinLine('down-to-right').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box3, 'circle').fullBox) &&
             (checkMark(box5, 'circle').fullBox) &&
             (checkMark(box7, 'circle').fullBox)) {
    triggerWin('player O', 'up-to-right');
    getWinLine('up-to-right').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box3, 'x-mark').fullBox)) {
    triggerWin('player X', 'top-hor');
    getWinLine('top-hor').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox)) {
    triggerWin('player X', 'mid-hor');
    getWinLine('mid-hor').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box7, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'bot-hor');
    getWinLine('bot-hor').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box4, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X', 'left-vert');
    getWinLine('left-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box2, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box8, 'x-mark').fullBox)) {
    triggerWin('player X', 'mid-vert');
    getWinLine('mid-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box6, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'right-vert');
    getWinLine('right-vert').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box1, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box9, 'x-mark').fullBox)) {
    triggerWin('player X', 'down-to-right');
    getWinLine('down-to-right').line.style.display = 'block';
    win = true;
  } else if ((checkMark(box3, 'x-mark').fullBox) &&
             (checkMark(box5, 'x-mark').fullBox) &&
             (checkMark(box7, 'x-mark').fullBox)) {
    triggerWin('player X', 'up-to-right');
    getWinLine('up-to-right').line.style.display = 'block';
    win = true;
  } else if (isItATie().tie === true) {
    whichPlayer.innerHTML = 'It\'s a tie';
    message.innerHTML = 'replay?';
    replay.style.display = 'inline-block';
    console.log('its a tie');
    reset('top-hor');
  }

  function reset(line) {
    replay.addEventListener('click', () => {
      win = false;
      let _winLine = document.getElementById(line);
      _winLine.style.removeProperty('display');
      _winLine.style.display = 'none';

      for (let i = 1; i <= 9; i++) {
        getBox(i).firstElementChild.removeAttribute('class');
        getBox(i).firstElementChild.setAttribute('src', './assets/transparent.png');
      }

      whichPlayer.innerHTML = 'Player O';
      message.innerHTML = 'It\'s your turn!';
      drawOnBoard(mode);
      replay.style.display = 'none';
    });
  };
}
