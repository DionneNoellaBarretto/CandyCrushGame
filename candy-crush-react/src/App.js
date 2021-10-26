import { useState, useEffect } from "react";

// width of the board
const width = 8;
// array of candy colors
const candyColors = ["blue", "red", "green", "yellow", "orange", "purple"];

const App = () => {
  // to store the candy colored arrangements state
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const checkForColumnOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];

      const decidedColor = currentColorArrangement[i];

      // checking if we have 3 same colors in a line
      if (
        columnOfFour.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        // replacing with an empty string
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  // check functions
  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      // [0,8,16] ; [1,9,17] and so on...

      // value of the first ith element to be matched with for 9*1idth & iwidth*2!
      const decidedColor = currentColorArrangement[i];

      // checking if we have 3 same colors in a line
      if (
        columnOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        // replacing with an empty string
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  //check for row of 4,3

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];

      const decidedColor = currentColorArrangement[i];
      // skipping last 2 columns in row check
      const notValid = [
        6, 7, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        // replacing with an empty string
        rowOfThree.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i < 47; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];

      const decidedColor = currentColorArrangement[i];
      // skipping last 2 columns in row check
      const notValid = [
        5,
        6,
        7,
        ,
        13,
        14,
        15,
        21,
        22,
        23,
        29,
        30,
        31,
        37,
        38,
        39,
        45,
        46,
        47,
        53,
        54,
        55,
        62,
        63,
        64,
      ];

      if (notValid.includes(i)) continue;
      if (
        rowOfFour.every(
          (square) => currentColorArrangement[square] === decidedColor
        )
      ) {
        // replacing with an empty string
        rowOfFour.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  const moveIntoSquareBelow = () => {
    for (let i = 0; i < 64 - width; i++) {
      // if all empty squares are in the first row generate a new random candy to plug into that column!

      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];

      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === "") {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        currentColorArrangement[i] = candyColors[randomNumber];
      }

      if (currentColorArrangement[i + width] === "") {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = "";
      }
    }
  };

  // for 64 (8x8) board with random candies
  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }

    setCurrentColorArrangement(randomColorArrangement);
    // console.log(randomColorArrangement);
  };

  // to call the state only once using useEffect with an empty array
  useEffect(() => {
    createBoard();
  }, []);
  // if width of board changed this can be called again by passing width in []

  useEffect(() => {
    // timer for every 100ms since the board will change constantly!
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForColumnOfThree();
      checkForRowOfFour();
      checkForRowOfThree();
      moveIntoSquareBelow();
      // ... is a spread operator in es6 expands array into separate individual elements!
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangement,
  ]);

  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColors, index) => (
          <img
            alt="candy color"
            key={index}
            style={{ backgroundColor: candyColors }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
