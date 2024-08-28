import {useState} from 'react';

function Square({value, onSquareClick}) { // 자식
  return(
    <button type="button" className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default Square;