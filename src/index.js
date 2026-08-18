import { GameBoard } from "./gameBoard.js";
import { gameScreenDisplay, generateGrid } from "./gameScreenUI.js";
import { shipLocationGenerator } from "./shipLocationGenerator.js";
import { startScreenUI } from "./startScreenUI.js";
import "./styles.css";

startScreenUI();

console.log("Hey, handsome!");

function printhELLO() {
  console.log("Hello");
}

printhELLO();
GameBoard();

shipLocationGenerator();
