import { createContext, useState } from "react";
import AboutContext from "./Hooks/AboutContext";
import Context from "./Hooks/UseContext";
import "./styles.css";

const themeContext = createContext();

export default function App() {
  const [data, setData] = useState(0);

  const handleData = () => {
    setData(data + 1);
    // console.log("handleData");
  };

  return (
    <div className="App">
      <themeContext.Provider value={{ data, handleData }}>
        <Context />
        <AboutContext />
      </themeContext.Provider>
    </div>
  );
}
export { themeContext };
