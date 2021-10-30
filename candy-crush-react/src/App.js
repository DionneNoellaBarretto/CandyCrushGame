/* eslint-disable no-sparse-arrays */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard";
import red from "./images/red.png";
import blue from "./images/blue.png";
import green from "./images/green.png";
import yellow from "./images/yellow.png";
import orange from "./images/orange.png";
import purple from "./images/purple.png";
import blank from "./images/blank.png";

// width of the board
const width = 8;
// array of candy colors
const candyColors = [blue, red, green, yellow, orange, purple, blank];

const App = () => {
  // to store the candy colored arrangements state
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);

const checkForColumnOfFive = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFive = [i, i + width, i + width * 2, i + width * 3, i+width *4];
      const decidedColor = currentColorArrangement[i];

      const isBlank = currentColorArrangement[i] === blank;

      // checking if we have 3 same colors in a line
      if (
        columnOfFive.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 5);
        // replacing with an empty string
        columnOfFive.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };


  const checkForRowOfFive = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFive = [i, i + width, i + width * 2, i + width * 3, i+width *4];
      const decidedColor = currentColorArrangement[i];
      // skipping last 3 columns in row check
      const notValid = [
        5,6, 7, 13,14,15, 21,22, 23, 29,30, 31, 37,38, 39, 45,46, 47, 53,54, 55, 62,63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank;
      if (notValid.includes(i)) continue;

      if (
        rowOfFive.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 5);
        // replacing with an empty string
        rowOfFive.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];

      const isBlank = currentColorArrangement[i] === blank;

      // checking if we have 3 same colors in a line
      if (
        columnOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        // replacing with an empty string
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i <= 47; i++) {
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
      const isBlank = currentColorArrangement[i] === blank;
      if (notValid.includes(i)) continue;
      if (
        rowOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        // replacing with an empty string
        rowOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  // check functions
  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      // [0,8,16] ; [1,9,17] and so on...
      const isBlank = currentColorArrangement[i] === blank;
      // value of the first ith element to be matched with for 9*1idth & iwidth*2!
      const decidedColor = currentColorArrangement[i];

      // checking if we have 3 same colors in a line
      if (
        columnOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        // replacing with an empty string
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  //check for row of 3
  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      // skipping last 2 columns in row check
      const notValid = [
        6, 7, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank;
      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        // replacing with an empty string
        rowOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const moveIntoSquareBelow = () => {
    // 64-width = 55
    for (let i = 0; i < 64 - width; i++) {
      // if all empty squares are in the first row generate a new random candy to plug into that column!

      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        currentColorArrangement[i] = candyColors[randomNumber];
      }

      if (currentColorArrangement[i + width] === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = blank;
      }
    }
  };

  const dragStart = (e) => {
    // console.log("dragStart");
    // console.log(e.target);
    setSquareBeingDragged(e.target);
  };

  const dragDrop = (e) => {
    // console.log("dragDrop");
    // console.log(e.target);
    setSquareBeingReplaced(e.target);
  };

  const dragEnd = (e) => {
    // console.log("dragEnd");
    console.log(e.target);

    const squareBeingDraggedID = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedID = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );

    // color switching logic!

    currentColorArrangement[squareBeingReplacedID] =
      squareBeingDragged.getAttribute("src");
    currentColorArrangement[squareBeingDraggedID] =
      squareBeingReplaced.getAttribute("src");

    // valid moves!

    const validMoves = [
      squareBeingDraggedID - 1,
      squareBeingDraggedID - width,
      squareBeingDraggedID + 1,
      squareBeingDraggedID + width,
    ];

    //

    const validMove = validMoves.includes(squareBeingReplacedID);

    console.log(squareBeingDraggedID, squareBeingReplacedID);
    const isAColumnOfFive = checkForColumnOfFive();
    const isARowOfFive = checkForRowOfFive();
    const isAColumnOfFour = checkForColumnOfFour();
    const isARowOfFour = checkForRowOfFour();
    const isAColumnOfThree = checkForColumnOfThree();
    const isARowOfThree = checkForRowOfThree();

    if (
      squareBeingReplacedID &&
      validMove &&
      (isAColumnOfFive || isARowOfFive || isAColumnOfFour || isARowOfFour || isAColumnOfThree || isARowOfThree)
    ) {
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    } else {
      currentColorArrangement[squareBeingReplacedID] =
        squareBeingReplaced.getAttribute("src");
      currentColorArrangement[squareBeingDraggedID] =
        squareBeingDragged.getAttribute("src");
      setCurrentColorArrangement([...currentColorArrangement]);
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
      checkForColumnOfFive();
      checkForColumnOfFour();
      checkForColumnOfThree();
      checkForRowOfFive();
      checkForRowOfFour();
      checkForRowOfThree();
      moveIntoSquareBelow();
      // ... is a spread operator in es6 expands array into separate individual elements!
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFive,
    checkForRowOfFive,
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
        {currentColorArrangement.map((candyColors, index: number) => (
          <img
            alt="candy color"
            src={candyColors}
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
            key={index}
            style={{ backgroundColor: candyColors }}
          />
        ))}
      </div>
      <ScoreBoard score={scoreDisplay} />
    </div>
  );
};

export default App;
