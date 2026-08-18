import { markEnemyAttacked, markUserAttacked } from "./markAttacked.js";

export function addListenerstoEnemyGrid(computer, user) {
  const enemyGrid = document.querySelector(".computer-grid");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.querySelector(
        `.comp-cell[data-row="${i}"][data-col="${j}"]`,
      );
      cell.addEventListener("click", (event) => {
        if (
          computer.getStat(event.target.dataset.row, event.target.dataset.col)
        ) {
          return;
        }

        markEnemyAttacked(
          event.target.dataset.row,
          event.target.dataset.col,
          computer,
        );

        //console.log(`boardyx: ${event.target.dataset.col}`);

        computer.recieveAttack(
          event.target.dataset.row,
          event.target.dataset.col,
          computer,
        );

        let turn = document.querySelector(".player-turn");
        turn.textContent = "ENEMY'S TURN";

        const overlay = document.createElement("div");
        const body = document.querySelector("body");
        overlay.id = "ui-lock";
        body.appendChild(overlay);

        setTimeout(
          opponentAttack,
          1500,
          Math.trunc(Math.random() * 10),
          Math.trunc(Math.random() * 10),
          user,
        );

        //turn.textContent = "YOUR TURN";
      });
    }
  }
}

export const opponentAttack = function (x, y, player) {
  let res = player.getStat(x, y);

  if (player.getStat(x, y)) {
    opponentAttack(
      Math.trunc(Math.random() * 10),
      Math.trunc(Math.random() * 10),
      player,
    );
    return;
  }

  markUserAttacked(x, y, player);
  let turn = document.querySelector(".player-turn");
  turn.textContent = "YOUR TURN";

  player.recieveAttack(x, y, player);

  const overlay = document.getElementById("ui-lock");
  overlay.remove();
  //player.recieveAttack(x, y, user);
};
