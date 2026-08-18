export function shipLocationGenerator() {
  //create a grid to know the cells where ship already exist
  const grid = Array.from({ length: 10 }, () => new Array(10).fill(0));
  const length = [5, 4, 3, 3, 2]; //length of the ships
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const coordinateArray = []; //coordinates of all the ships

  //console.log(grid[0][0]);

  let c = [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)];

  //function to generate a random coordinate
  const generateRandomCoordinates = function () {
    let temp = [];
    temp.push(Math.abs(Math.trunc(Math.random() * 10)));
    temp.push(Math.abs(Math.trunc(Math.random() * 10)));
    return temp;
  };

  //loops through each length of the ships
  for (const l of length) {
    let randomCoordinate = generateRandomCoordinates();
    //In case the the generated coordinates is already taken, generate another coordinates
    while (grid[randomCoordinate[0]][randomCoordinate[1]] === 1) {
      randomCoordinate = generateRandomCoordinates();
    }
    grid[randomCoordinate[0]][randomCoordinate[1]] = 1;
    let count = [1];
    let res = [randomCoordinate];
    //console.log(`randomC = ${randomCoordinate}`);

    //perform dfs on the 4 neighbours starting from the left one - if any one of it returns true, ignore the rest
    if (
      dfs(randomCoordinate, directions[0], count, l, res, grid) ||
      dfs(randomCoordinate, directions[1], count, l, res, grid) ||
      dfs(randomCoordinate, directions[2], count, l, res, grid) ||
      dfs(randomCoordinate, directions[3], count, l, res, grid)
    ) {
      // console.log("Hellllooooo");
      coordinateArray.push(...res);
      //console.log(`coordinate: ${coordinateArray}`);
    } else {
      if (count[0] !== l) {
        //In rare cases none of the dfs will return true
        console.log("Error in coordinate generator!");
      }
    }
  }

  //console.log(coordinateArray);
  //console.log(grid);
  return coordinateArray;
}

function dfs(randomCoordinate, directions, count, l, res, grid) {
  let x = randomCoordinate[0] + directions[0];
  let y = randomCoordinate[1] + directions[1];
  //console.log(`x = ${x} y = ${y}`);
  //console.log(`count = ${count}`);
  //console.log(`res = ${res}`);
  //console.log(grid[0][0]);

  if (
    x >= 0 &&
    y >= 0 &&
    x < 10 &&
    y < 10 &&
    count[0] < l &&
    grid[x][y] === 0
  ) {
    count[0] += 1;
    dfs([x, y], directions, count, l, res, grid);
    if (count[0] === l) {
      res.push([x, y]);
      grid[x][y] = 1;
      return true;
    } else {
      grid[x][y] = 0;
      count[0] -= 1;
    }
  } else {
    return;
  }
}
