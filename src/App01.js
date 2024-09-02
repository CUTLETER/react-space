import { Fragment } from "react";
import { useState } from "react";
import Product from "./component/Product";
import MyButton from "./component/MyButton";
import User from "./component/User";

function App01() {
  const [count, setCount] = useState(0); // 초기값 0
  // useState로 인해 현재 count 수와 누적시킬 setCount 함수를 얻을 수 있게 됨

  let handleClick = () => {
    //alert('You clicked me!');
    setCount(count+1);
  }

  return(
    <Fragment>
      <h1>Welcome to my App</h1>
      <User />
      <hr/>
      <MyButton count={count} onClick={handleClick} /> {/* 렌더링 작업*/}
      <MyButton count={count} onClick={handleClick}/> {/* 버튼마다 클릭 횟수가 각각 다르게 누적됨 */}
      <hr/>
      <Product />
    </Fragment>
  )
}

export default App01;