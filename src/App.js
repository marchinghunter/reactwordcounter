import "./App.css";
import Counted from "./components/Counted";
import React, { useState } from "react";

let word = 0,
  character = 0;
let pagemode = "bi-lightbulb-fill";
let navbg = "bg-primary";
let btncolor = "btn-primary";

function App() {
  const count = (event) => {
    setText(event.target.value);
    word = text.split(" ").length;
    character = text.length;
  };
  const capitalize = () => {
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  };
  const [text, setText] = useState("");
  let [mode, setMode] = useState("light");
  const changeMode = () => {
    if (mode === "light") {
      mode = "dark";
      setMode(
        (navbg = "bg-dark"),
        (pagemode = "bi-lightbulb"),
        (btncolor = "btn-dark")
      );
    } else {
      mode = "light";
      setMode(
        (pagemode = "bi-lightbulb-fill"),
        (navbg = "bg-primary"),
        (btncolor = "btn-primary")
      );
    }
  };
  return (
    <>
      <nav className={`navbar ${navbg}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Text Counter</span>
        </div>
        <div className="cTime">
          
        </div>

        <span className="counted">
          <Counted words={word} characters={character} />
          <button
            type="button"
            className={`btn ${btncolor} bulbtn`}
            onClick={changeMode}
          >
            <i className={`bi ${pagemode} fa-lg`}></i>
          </button>
        </span>
      </nav>
      <div className="container">
        <div className="mb-3">
          <h1 className="heading">Enter Text Here</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={count}
          ></textarea>
          <button
            type="button"
            className={`btn ${btncolor} my-3 mx-3`}
            onClick={capitalize}
          >
            Uppercase
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
