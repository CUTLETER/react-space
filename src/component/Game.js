import { useState } from "react";
import Board from "./Board";

function Game() {
  const[xIsNext, setXIsNext] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length-1];

  let handlePlay = (nextSquares) => {

  }

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/* 내용 */}</ol>
      </div>
    </div>      
  )
}

export default Game;