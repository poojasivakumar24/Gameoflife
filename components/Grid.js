import React from "react";
import Lodash from "lodash";
const Grid = ({ grid, setgrid, row, col }) => {
  



  return (
    <div
      className="grid"
      style={{
        display: "grid",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
        gridTemplateColumns: `repeat(${col} ,40px)`
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i} -${k}`}
            onClick={() => {
              const newGrid = Lodash.cloneDeep(grid);
              newGrid[i][k] = grid[i][k] ? 0 : 1;
              setgrid(newGrid);
            }}
            style={{
              width: 30,
              height: 30,
              backgroundColor: grid[i][k] ? "yellow" : undefined,
              border: "solid 2px black"
            }}
          ></div>
        ))
      )}
    </div>
  );
};
export default Grid;
