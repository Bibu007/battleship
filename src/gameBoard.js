import { Cell } from "./cell.js";
import { shipLocationGenerator } from "./shipLocationGenerator.js";

export function GameBoard() {
  const board = Array.from({ length: 10 }, () => new Array(10).fill(Cell()));
  let shipCellCount = 17;
  //console.log(board);

  const placeShip = function (coordinatesArray) {
    for (const c of coordinatesArray) {
      console.log(`${c[0]} ${c[1]}`);
      board[c[0]][c[1]].setShip();
    }
  };

  const coordinatesArray = shipLocationGenerator();
  //console.log(coordinatesArray);

  placeShip(coordinatesArray);

  //console.log(`board`);
  //console.log(board[0][1].hasShip());

  const allShipsSunk = function () {};

  const recieveAttack = function (coordinates) {
    if (!board[coordinates[0]][coordinates[1]].getStatus()) {
      board[coordinates[0]][coordinates[1]].setStatus();
      if (board[coordinates[0]][coordinates[1]].hasShip()) {
        shipCellCount -= 1;
        if (shipCellCount === 0) {
          allShipsSunk();
        }
      }
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
  return { getBoard, getCoordinatesArray };
}
