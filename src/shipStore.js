import { Ship } from "./ship.js";

export function ShipStore() {
  const carrier = Ship(5);
  const battleship = Ship(4);
  const destroyer = Ship(3);
  const submarine = Ship(3);
  const patrol = Ship(2);

  const ships = [carrier, battleship, destroyer, submarine, patrol];

  const getShips = function () {
    return ships;
  };

  return { getShips };
}
