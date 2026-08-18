import { startScreenUI } from "./startScreenUI.js";

export function gameScreenDisplay() {
  const body = document.querySelector("body");
  body.replaceChildren();

  //parent container
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("parent-container");

  //player turn container
  const playerTurn = document.createElement("div");
  playerTurn.classList.add("player-turn");

  playerTurn.textContent = "YOUR TURN";

  //grid container
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  //user grid container
  const userGridContainer = document.createElement("div");
  userGridContainer.classList.add("user-grid-container");
  userGridContainer.classList.add("container");

  //title for user grid container
  const title1 = document.createElement("div");
  title1.classList.add("title");
  title1.textContent = "Your waters";

  //user grid
  const userGrid = document.createElement("div");
  userGrid.classList.add("user-grid");
  userGrid.classList.add("grid");
  const carrierVerticalUrl = new URL(
    "./images/ShipCarrierHull.png",
    import.meta.url,
  );
  const carrierHorizontalUrl = new URL(
    "./images/ShipCarrierHull-horizontal.png",
    import.meta.url,
  );
  const battleshipVerticalUrl = new URL(
    "./images/ShipBattleshipHull.png",
    import.meta.url,
  );
  const battleshipHorizontalUrl = new URL(
    "./images/ShipBattleshipHull-horizontal.png",
    import.meta.url,
  );
  const destroyerVerticalUrl = new URL(
    "./images/ShipDestroyerHull.png",
    import.meta.url,
  );
  const destroyerHorizontalUrl = new URL(
    "./images/ShipDestroyerHull -horizontal.png",
    import.meta.url,
  );
  const patrolVerticalUrl = new URL(
    "./images/ShipPatrolHull.png",
    import.meta.url,
  );
  const patrolHorizontalUrl = new URL(
    "./images/ShipPatrolHull-horizontal.png",
    import.meta.url,
  );
  const submarineVerticalUrl = new URL(
    "./images/ShipSubMarineHull.png",
    import.meta.url,
  );
  const submarineHorizontalUrl = new URL(
    "./images/ShipSubMarineHull-horizontal.png",
    import.meta.url,
  );
  userGrid.innerHTML = `<img
        src="${carrierVerticalUrl}"
        alt=""
        class="carrier ship vertical hidden"
      />
      <img
        src="${carrierHorizontalUrl}"
        alt=""
        class="carrier ship hidden horizontal"
      />
      <img
        src="${battleshipVerticalUrl}"
        alt=""
        class="battleship ship hidden vertical"
      />
      <img
        src="${battleshipHorizontalUrl}"
        alt=""
        class="battleship ship hidden horizontal"
      />
      <img
        src="${destroyerVerticalUrl}"
        alt=""
        class="destroyer ship hidden vertical"
      />
      <img
        src="${destroyerHorizontalUrl}"
        alt=""
        class="destroyer ship hidden horizontal"
      />
      <img
        src="${patrolVerticalUrl}"
        alt=""
        class="patrol ship hidden vertical"
      />
      <img
        src="${patrolHorizontalUrl}"
        alt=""
        class="patrol ship hidden horizontal"
      />
      <img
        src="${submarineVerticalUrl}"
        alt=""
        class="submarine ship hidden vertical"
      />
      <img
        src="${submarineHorizontalUrl}"
        alt=""
        class="submarine ship hidden horizontal"
      />`;

  //computer grid container
  const computerGridContainer = document.createElement("div");
  computerGridContainer.classList.add("computer-grid-container");
  computerGridContainer.classList.add("container");

  //title for computer grid container
  const title2 = document.createElement("div");
  title2.classList.add("title");
  title2.classList.add("enemy");
  title2.textContent = "Enemy waters";

  //computer grid
  const computerGrid = document.createElement("div");
  computerGrid.classList.add("computer-grid");
  computerGrid.classList.add("grid");

  //Adding gridContainers o parent grid containers
  gridContainer.appendChild(userGridContainer);
  userGridContainer.appendChild(title1);
  userGridContainer.appendChild(userGrid);

  gridContainer.appendChild(computerGridContainer);
  computerGridContainer.appendChild(title2);
  computerGridContainer.appendChild(computerGrid);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const btn = document.createElement("button");
  btn.id = "restart";
  btn.textContent = "Restart";

  btn.addEventListener("click", () => {
    startScreenUI();
  });

  btnContainer.appendChild(btn);

  parentContainer.appendChild(playerTurn);
  parentContainer.appendChild(gridContainer);
  parentContainer.appendChild(btnContainer);

  body.appendChild(parentContainer);

  //generateGrid();
}

export const generateGrid = function () {
  const userGridContainer = document.querySelector(".user-grid");
  //gridContainer.replaceChildren();
  //gridContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      //console.log("Hey");
      const cell = document.createElement("div");
      cell.classList.add("user-cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      userGridContainer.appendChild(cell);
    }
  }

  const compGridContainer = document.querySelector(".computer-grid");
  //gridContainer.replaceChildren();
  //gridContainer.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      //console.log("Hey");
      const cell = document.createElement("div");
      cell.classList.add("comp-cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      compGridContainer.appendChild(cell);
    }
  }
};

export const userGridShiplacementUI = function (coordinateArray) {
  //console.log(coordinateArray);
  const carrierPlacement = function (coordinateArray) {
    const rows = [];
    const cols = [];
    for (let i = 0; i < 5; i++) {
      rows.push(coordinateArray[i][0]);
      cols.push(coordinateArray[i][1]);
    }
    if (rows[1] - rows[0] === 0) {
      const sorted = cols.sort();
      const ship = document.querySelector(".carrier.horizontal");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${rows[0] + 1} / ${rows[0] + 2}`;
      ship.style.gridColumn = `${sorted[0] + 1} / ${sorted[4] + 2}`;
    } else {
      const sorted = rows.sort();
      const ship = document.querySelector(".carrier.vertical");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${sorted[0] + 1} / ${sorted[4] + 2}`;
      ship.style.gridColumn = `${cols[0] + 1} / ${cols[0] + 2}`;
    }
  };

  const battleshipPlacement = function (coordinateArray) {
    const rows = [];
    const cols = [];
    for (let i = 5; i < 9; i++) {
      rows.push(coordinateArray[i][0]);
      cols.push(coordinateArray[i][1]);
    }
    if (rows[1] - rows[0] === 0) {
      const sorted = cols.sort();
      const ship = document.querySelector(".battleship.horizontal");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${rows[0] + 1} / ${rows[0] + 2}`;
      ship.style.gridColumn = `${sorted[0] + 1} / ${sorted[3] + 2}`;
    } else {
      const sorted = rows.sort();
      const ship = document.querySelector(".battleship.vertical");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${sorted[0] + 1} / ${sorted[3] + 2}`;
      ship.style.gridColumn = `${cols[0] + 1} / ${cols[0] + 2}`;
    }
  };

  const destroyerPlacement = function (coordinateArray) {
    const rows = [];
    const cols = [];
    for (let i = 9; i < 12; i++) {
      rows.push(coordinateArray[i][0]);
      cols.push(coordinateArray[i][1]);
    }
    if (rows[1] - rows[0] === 0) {
      const sorted = cols.sort();
      const ship = document.querySelector(".destroyer.horizontal");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${rows[0] + 1} / ${rows[0] + 2}`;
      ship.style.gridColumn = `${sorted[0] + 1} / ${sorted[2] + 2}`;
    } else {
      const sorted = rows.sort();
      const ship = document.querySelector(".destroyer.vertical");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${sorted[0] + 1} / ${sorted[2] + 2}`;
      ship.style.gridColumn = `${cols[0] + 1} / ${cols[0] + 2}`;
    }
  };

  const submarinePlacement = function (coordinateArray) {
    const rows = [];
    const cols = [];
    for (let i = 12; i < 15; i++) {
      rows.push(coordinateArray[i][0]);
      cols.push(coordinateArray[i][1]);
    }
    //console.log(rows);
    //console.log(rows[1] - rows[0] === 0);
    if (rows[1] - rows[0] === 0) {
      const sorted = cols.sort();
      const ship = document.querySelector(".submarine.horizontal");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${rows[0] + 1} / ${rows[0] + 2}`;
      ship.style.gridColumn = `${sorted[0] + 1} / ${sorted[2] + 2}`;
    } else {
      const sorted = rows.sort();
      const ship = document.querySelector(".submarine.vertical");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${sorted[0] + 1} / ${sorted[2] + 2}`;
      ship.style.gridColumn = `${cols[0] + 1} / ${cols[0] + 2}`;
    }
  };

  const patrolPlacement = function (coordinateArray) {
    const rows = [];
    const cols = [];
    for (let i = 15; i < 17; i++) {
      rows.push(coordinateArray[i][0]);
      cols.push(coordinateArray[i][1]);
    }
    if (rows[1] - rows[0] === 0) {
      const sorted = cols.sort();
      const ship = document.querySelector(".patrol.horizontal");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${rows[0] + 1} / ${rows[0] + 2}`;
      ship.style.gridColumn = `${sorted[0] + 1} / ${sorted[1] + 2}`;
    } else {
      const sorted = rows.sort();
      const ship = document.querySelector(".patrol.vertical");
      ship.classList.remove("hidden");
      ship.style.gridRow = `${sorted[0] + 1} / ${sorted[1] + 2}`;
      ship.style.gridColumn = `${cols[0] + 1} / ${cols[0] + 2}`;
    }
  };

  carrierPlacement(coordinateArray);
  battleshipPlacement(coordinateArray);
  destroyerPlacement(coordinateArray);
  submarinePlacement(coordinateArray);
  patrolPlacement(coordinateArray);
};
