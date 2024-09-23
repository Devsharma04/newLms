import style from "./test.module.css";
import Modal from "../Portal/Modal_comp";
import { useState } from "react";
function testcard({ card }) {
  const [modal, setmodal] = useState(false);
  function showmodal() {
    setmodal(!modal);
  }
  return (
    <div className={style.main}>
      {card.map((a) => {
        return (
          <div className={style.card} onClick={showmodal}>
            {modal && <Modal />}
            <h4>{a.topic}</h4>
            <div className="flex justify-between mt-16">
              <div className={style.box}>
                <p>Duration</p>
                <p className="font-bold">{a.duration}</p>
              </div>
              <div className={style.box}>
                <p>Total Topic</p>
                <p className="font-bold">{a.total}</p>
              </div>
              <div className={style.box}>
                <p>Fees</p>
                <p className="font-bold">{a.fee}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default testcard;
