import { shipLocationGenerator } from "./shipLocationGenerator.js";
import { displayWinner } from "./displayWinner.js";

export function GameBoard() {
  const board = Array.from({ length: 10 }, () => new Array(10).fill(-1));
  let shipCellCount = 17;
  //console.log(board);

  const placeShip = function (coordinatesArray) {
    for (let i = 0; i < 17; i++) {
      board[coordinatesArray[i][0]][coordinatesArray[i][1]] = 1;
    }
  };

  const coordinatesArray = shipLocationGenerator();
  //console.log(coordinatesArray);

  //console.log(`printBoard before:`);
  //console.log(board);

  placeShip(coordinatesArray);

  //console.log(`printBoard after:`);
  //console.log(board);

  //console.log(`board`);
  //console.log(board[0][1].hasShip());

  //const allShipsSunk = function () {};

  const recieveAttack = function (x, y, player) {
    //console.log(`boardxy: ${board[x][y]}`);
    if (board[x][y] === 0) {
      return;
    }
    if (board[x][y] === 1) {
      shipCellCount -= 1;
      board[x][y] = 0;
    }
    if (shipCellCount === 0) {
      displayWinner(player);
    }
    if (board[x][y] === -1) {
      board[x][y] = 0;
      //console.log("WTF");
    }
  };

  const getStat = function (x, y) {
    //console.log(board[x][y]);
    if (board[x][y] === 0) {
      return true;
    } else {
      return false;
    }
  };

  const getBoard = function () {
    return board;
  };

  const getCoordinatesArray = function () {
    return coordinatesArray;
  };

  //placeShip([[1, 0]]);

  //console.log(board[1][0].getShip());

  //return { placeShip };
  return {
    getBoard,
    getCoordinatesArray,
    recieveAttack,
    getStat,
  };
}
