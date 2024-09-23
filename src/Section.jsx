import "./Section.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Lsection() {
  let [colorvar, setcolorvar] = useState(2);

  function Comp_loader(a) {
    colorvar = a;
    setcolorvar(colorvar);
  }
  return (
    <div className={"main"}>
      <Link to="module">
        <button
          className={colorvar === 1 ? "click" : "box"}
          onClick={() => Comp_loader(1)}
        >
          Module
        </button>
      </Link>
      <Link to="/">
        <button
          className={colorvar === 2 ? "click" : "box"}
          onClick={() => Comp_loader(2)}
        >
          Batch
        </button>
      </Link>
      <Link to="test">
        <button
          className={colorvar === 3 ? "click" : "box"}
          onClick={() => Comp_loader(3)}
        >
          Test Module
        </button>
      </Link>
      <Link to="resources">
        <button
          className={colorvar === 4 ? "click" : "box"}
          onClick={() => Comp_loader(4)}
        >
          Resources
        </button>
      </Link>
    </div>
  );
}

export default Lsection;
