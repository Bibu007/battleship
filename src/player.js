import { GameBoard } from "./gameBoard.js";

export function Player() {
  const gameBoard = GameBoard();
  let playerType = 0;

  const setType = function (type) {
    playerType = type; //type = 0(real) type = 1(computer)
  };

  const getType = function () {
    return playerType;
  };

  return { setType, getType };
}
