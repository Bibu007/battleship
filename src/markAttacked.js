export const markEnemyAttacked = function (x, y, player) {
  const board = player.getBoard();
  const cell = document.querySelector(
    `.comp-cell[data-row="${x}"][data-col="${y}"]`,
  );
  if (board[x][y] === 1) {
    cell.classList.add("red-attacked");
  } else {
    cell.classList.add("green-attacked");
  }
};

export const markUserAttacked = function (x, y, player) {
  const board = player.getBoard();
  const cell = document.querySelector(
    `.user-cell[data-row="${x}"][data-col="${y}"]`,
  );
  if (board[x][y] === 1) {
    cell.classList.add("red-attacked");
  } else {
    cell.classList.add("green-attacked");
  }
};
