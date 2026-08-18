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

  const getBoard = function () {
    return gameBoard.getBoard();
  };

  const getCoordinatesArray = function () {
    return gameBoard.getCoordinatesArray();
  };

  const recieveAttack = function (x, y, player) {
    gameBoard.recieveAttack(x, y, player);
  };

  const getStat = function (x, y) {
    return gameBoard.getStat(x, y);
  };

  return {
    setType,
    getType,
    getBoard,
    getCoordinatesArray,
    recieveAttack,
    getStat,
  };
}
