import { Fragment } from "react";
import Product from "./component/Product";
import MyButton from "./component/MyButton";
import User from "./component/User";

function App() {
  return(
    <Fragment>
      <h1>Welcome to my App</h1>
      <User />
      <hr/>
      <MyButton />
      <hr/>
      <Product />
    </Fragment>
  )
}

export default App;