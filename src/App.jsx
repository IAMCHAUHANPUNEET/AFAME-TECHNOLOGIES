import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import display from "./components/display";
import Display from "./components/display";
import Buttoncontainer from "./components/Btncontainer";
function App() {
  let [Calval, setCalval] = useState("");
  let onBtnClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText == "c") {
      setCalval("");
    } else if (buttonText == "=") {
      let result = eval(Calval);
      setCalval(result);
    } else {
      let newdisplayvalue = Calval + buttonText;
      setCalval(newdisplayvalue);
    }
  };

  // currentbtnval = btn.style.background = "white";

  return (
    <>
      <div className={styles.calculator}>
        <Display displayvalue={Calval}></Display>
        <Buttoncontainer onBtnClick={onBtnClick}></Buttoncontainer>
      </div>
    </>
  );
}

export default App;
