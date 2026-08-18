import { startScreenUI } from "./startScreenUI.js";

export const displayWinner = function (player) {
  const body = document.querySelector("body");
  const dialog = document.createElement("dialog");
  const text = document.createElement("div");
  const btn = document.createElement("button");

  btn.textContent = "OK";

  dialog.appendChild(text);
  dialog.appendChild(btn);

  if (player.getType() === 1) {
    text.textContent = "YOU WIN!";
  } else {
    text.classList.add("lose");
    text.textContent = "YOU LOSE!";
  }

  body.appendChild(dialog);
  dialog.showModal();
  btn.addEventListener("click", () => {
    startScreenUI();
  });
};
