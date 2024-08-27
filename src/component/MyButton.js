import { useState } from "react";

function MyButton({count, onClick}) {
  return(
    <button type="button" onClick={onClick}> 
    {/* 클릭하면 onClick 핸들러 실행됨 -> 
    각 버튼의 onClick은 handleClick 함수로 설정됨 -> 
    App 내부의 핸들러 함수 실행됨 ->
    setCount 호출함 ->
    count state 증가시킴 ->
    새로운 count 값은 각 버튼에 props로 전달됨*/}
      clicked {count} times
    </button>
  )
}

export default MyButton;