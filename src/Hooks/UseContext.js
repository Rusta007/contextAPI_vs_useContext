import { useContext } from "react";
import { themeContext } from "../App";

function Context() {
  const { data, handleData } = useContext(themeContext);

  return (
    <>
      <h1>ChildA Component </h1>
      <h1>Context State : {data}</h1>
      <button onClick={handleData}>Increment</button>
    </>
  );
}
export default Context;
