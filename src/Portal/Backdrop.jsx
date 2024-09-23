import React from "react";
import style from "./backdrop.module.css";
function Backdrop({ show }) {
  return <div className={style.black} onClick={show}></div>;
}

export default Backdrop;
