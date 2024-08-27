import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0); // 초기값 0
  // useState로 인해 현재 count 수와 누적시킬 setCount 함수를 얻을 수 있게 됨

  let handleClick = () => {
    alert('You clicked me!');
    setCount(count+1);
  }

  return(
    <div>
      <button type="button" onClick={handleClick}>Clicked {count} times</button>
      {/* 이벤트 핸들러 함수 뒤에 () 붙이지 말것. 호출 XXX. 오로지 전달만! */}
    </div>
  )
}

export default MyButton;