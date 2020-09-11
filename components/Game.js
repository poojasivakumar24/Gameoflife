import React, { useState, useEffect } from "react";

const Game = ({ status, grid, setgrid,stop,setstop }) => {
  const [running, setRunning] = useState(false);
 // const runningr=useRef(running)

   useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (!running) {
          return;
        }
        setgrid(findNewGeneration(grid));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, grid, setgrid]);

  

  const fstop = () => {
    setRunning(false);
    setstop(!stop)
  };

  return running ? (
    <button onClick={fstop}>Stop</button>
  ) : (
    <button
      onClick={() => {
        setRunning(true);
      }}
    >
      Start
    </button>
  );
}; 

const findNewGeneration = (input_generation) => {
  let nrow = input_generation.length;
  let ncol = input_generation[0].length;
  let new_generation = input_generation.map(function (arr) {
    return arr.slice();
  });
  for (var i = 0; i < nrow; i++) {
    for (var j = 0; j < ncol; j++) {
      let neighbours = findingNeighbors(input_generation, i, j);
      new_generation[i][j] = nextState(input_generation[i][j], neighbours);
    }
  }
  return new_generation;
};

//Funtion to set new state
const nextState = (currentstate, neighbours) => {
  let newstate = currentstate;
  switch (currentstate) {
    case 1:
      if (neighbours > 3) {
        newstate = 0;
      }
      if (neighbours == 2 || neighbours == 3) {
        newstate = 1;
      }

      if (neighbours < 2) {
        newstate = 0;
      }
      break;

    case 0:
      if (neighbours == 3) {
        newstate = 1;
      }
      break;
  }
  return newstate;
};

//Funtion to find the number of alive neighbours
const findingNeighbors = (input_generation, i, j) => {
  var rend = input_generation.length - 1;
  var cend = input_generation[0].length - 1;
  let count = 0;
  for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rend); x++) {
    for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, cend); y++) {
      if (x !== i || y !== j) {
        if (input_generation[x][y] == 1) {
          count++;
        }
      }
    }
  }
  return count;
};

export default Game;
