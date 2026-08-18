import { addListenerstoEnemyGrid } from "./addListenerstoEnemyGrid.js";
import {
  gameScreenDisplay,
  generateGrid,
  userGridShiplacementUI,
} from "./gameScreenUI.js";
import { Player } from "./player.js";

export function startScreenUI() {
  const battleshipUrl = new URL("./images/battleship.svg", import.meta.url);
  const start = `<div id="battleship">BATTLESHIP</div>
    <div id="playContainer">
      <div class="missile">
        <div class="missile-body">
          <svg viewBox="0 0 60 20" width="60" height="20">
            <polygon
              points="0,10 12,4 8,10 12,16"
              fill="#f97316"
              class="thruster"
            />
            <polygon
              points="4,10 10,7 7,10 10,13"
              fill="#facc15"
              class="thruster"
            />
            <rect x="12" y="5" width="28" height="10" rx="1" fill="#94a3b8" />
            <path d="M 40 5 Q 58 10 40 15 Z" fill="#dc2626" />
            <polygon points="12,5 5,0 18,5" fill="#475569" />
            <polygon points="12,15 5,20 18,15" fill="#475569" />
            <rect x="34" y="5" width="3" height="10" fill="#dc2626" />
          </svg>
        </div>
      </div>
      <div class="explosion">
        <div class="explosion-fire"></div>
        <div class="explosion-ring"></div>
        <div class="explosion-sparks"></div>
      </div>
      <img src="${battleshipUrl}" alt="" class="battleship-icon" />
      <button id="play">PLAY</button>
      <img src="${battleshipUrl}" alt="" class="battleship-icon" />
    </div>`;

  const body = document.querySelector("body");

  body.innerHTML = start;

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    const user = new Player();
    const computer = new Player();
    computer.setType(1);
    gameScreenDisplay();
    generateGrid();
    userGridShiplacementUI(user.getCoordinatesArray());
    console.log("hello before listener");
    addListenerstoEnemyGrid(computer, user);
  });
}
