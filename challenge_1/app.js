let currentPlayer = 'O';

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  return currentPlayer;
}

function handlePlay(e) {
  const rows = document.querySelectorAll('#table td');

  rows.forEach(row => {
    if (e.target === row) {
      row.innerHTML = handlePlayerChange();
    }
  });
}

window.addEventListener('click', handlePlay);