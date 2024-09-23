import { Link, Outlet } from "react-router-dom";
import style from "./testop.module.css";
import { useState } from "react";
function testoption() {
  let [varcol, setvarcol] = useState(1);
  function secol(a) {
    varcol = a;
    setvarcol(varcol);
  }
  return (
    <div className={style.main}>
      <div className={style.top}>
        <Link to="/test">
          <button
            onClick={() => secol(1)}
            className={varcol === 1 ? style.active : style.button}
          >
            All Test
          </button>
        </Link>
        <Link to="CreateTest">
          <button
            onClick={() => secol(2)}
            className={varcol === 2 ? style.active : style.button}
          >
            Create Test
          </button>
        </Link>
        <Link to="TestResult">
          <button
            onClick={() => secol(3)}
            className={varcol === 3 ? style.active : style.button}
          >
            Test Results
          </button>
        </Link>
      </div>
      <div className={style.wrapper}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default testoption;
