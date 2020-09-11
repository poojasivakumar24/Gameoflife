import React, { useEffect, useState } from "react";
//import Userval from ./Uservval;
import Grid from "./Grid";
import Game from "./Game"

const Gameoflife = () => {
  const [row, setrow] = useState(0);
  const[stop,setstop] =useState(false)
  const [col, setcol] = useState(0);
  const [grid, setgrid] = useState([]);

  useEffect(() => {
    let newgrid = [];

    for (let i = 0; i < row; i++) {
      newgrid[i] = [];
      for (let j = 0; j < col; j++) {
        newgrid[i][j] = 0;
      }
    }
    setgrid(newgrid);
    console.log(newgrid);
  }, [stop,row, col]);

  return (
    <div>
      <label className="label">
        Rows:
        <input
          className="input"
          type="text"
          value={row}
          onChange={(e) => setrow(e.target.value)}
        />
      </label>
      <label className="label">
        Column:
        <input
          className="input"
          type="text"
          value={col}
          onChange={(e) => setcol(e.target.value)}
        />
      </label>
      <Grid grid={grid} setgrid={setgrid} row={row} col={col} />
      <Game grid={grid} setgrid={setgrid }stop={stop} setstop={setstop}  />
    </div>
  );
};

export default Gameoflife;
