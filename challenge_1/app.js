let currentPlayer = 'O';

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  return currentPlayer;
}

function handlePlay(e) {
  const boxes = document.querySelectorAll('#table td');

  boxes.forEach(box => {
    if (e.target === box && box.innerHTML === '') {
      box.innerHTML = handlePlayerChange();
    }
  });

  const state = handleState(boxes);
  // console.log('state in play handler ', state);
  handleWin(state);
}

function handleWin(state) {
  const winningState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  const numPlays = Object.keys(state).length;

  if (numPlays === 9) {
    setTimeout(() => {
      alert(`Game over! Reset game to play.`);
    }, 300);
    // clearTimeout();
  }

  // state is an object
  // iterate through and compare

  // alert(`Player ${player} won!`);
}

function handleState(boxes) {
  var currentState = {};

  
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    const getIndex = parseInt(
      box.getAttribute('data-cell-index')
    );
    
    if (box.innerHTML !== '') {
      currentState[getIndex] = box.innerHTML;
    }
  }

  return currentState;
}

function handleGameReset() {
  location.reload();
};

document.querySelector('#table').addEventListener('click', handlePlay);
document.querySelector('#button').addEventListener('click', handleGameReset);

// After each play, look for 3 in a row,
// either diagonally, horizontally and vertically.
// Also be sure to check to see if the board is full.

// If either condition is met,
// display a message and do not allow any additional plays.