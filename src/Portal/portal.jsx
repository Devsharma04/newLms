import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./modal";

function portal({ children, show }) {
  return (
    <div>
      {createPortal(
        <Backdrop show={show} />,
        document.querySelector(".backdrop")
      )}
      {createPortal(
        <Modal children={children} />,
        document.querySelector(".module ")
      )}
    </div>
  );
}

export default portal;
