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
      handleState(boxes);
    }
  });

  // handleWin(boxes);
}

// function handleWin(boxes) {
//   const winningState = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
 
//   const player = 'X';
//   const state = handleState(boxes);
//   console.log(state);


//   // for (var i = 0; i < state.length; i++) {
//   //   if (state === winningState[i]) {
//   //     console.log(state, ' -- state');
//   //     console.log(winningState[i], ' -- winningState[i]');
//   //     alert(`Player ${player} won!`);
//   //   }
//   // }
// }

function handleState(boxes) {
  var currentState = {};
  var objLength = Object.keys(currentState).length;

  
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    const getIndex = parseInt(
      box.getAttribute('data-cell-index')
    );
    
    if (box.innerHTML !== '') {
      currentState[getIndex] = box.innerHTML;
    }
  }
  console.log(currentState);
  return currentState;
}

function handleGameReset() {
  location.reload();
};

window.addEventListener('click', handlePlay);
document.querySelector('#button').addEventListener('click', handleGameReset);

// After each play, look for 3 in a row,
// either diagonally, horizontally and vertically.
// Also be sure to check to see if the board is full.

// If either condition is met,
// display a message and do not allow any additional plays.