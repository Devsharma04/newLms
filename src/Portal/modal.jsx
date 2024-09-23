import React from "react";
import style from "./modal.module.css";
function modal({ children }) {
  return <div className={style.modal}>{children}</div>;
}

export default modal;
