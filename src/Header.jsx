import style from "./header.module.css";
import brill from "./assets/brillicalogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Profile from "./Portal/profile";
function Head() {
  const [profile, showProfile] = useState(false);
  function show() {
    showProfile((show) => !profile);
  }
  return (
    <div className={style.main}>
      <div className={style.head}>
        <img src={brill} className={style.img} />
        <div className={style.right}>
          <span className={style.hide}>
            <sup className={style.bellred}>NEW</sup>
            <FontAwesomeIcon icon={faBell} className={style.bell} />
          </span>
          <div className={style.circle}>D</div>
          <span onClick={show}>
            Hi, Dev <i className="fa-solid fa-angle-down"></i>
          </span>
          {profile && <Profile show={show} />}
        </div>
      </div>
    </div>
  );
}

export default Head;
