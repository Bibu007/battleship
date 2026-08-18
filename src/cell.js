export function Cell() {
  let ship = false;
  let status = 0;

  function getStatus() {
    return status;
  }

  function setStatus() {
    if (status === 0) {
      status = 1;
    }
  }

  function setShip() {
    ship = true;
  }

  function hasShip() {
    return ship;
  }

  return { getStatus, hasShip, setStatus, setShip };
}
