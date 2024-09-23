import style from "./test.module.css";

function module() {
  return (
    <div className={style.down}>
      <div className={style.box}>
        <h4 className={style.bigbold}>Frontend Development</h4>
        <div className="flex flex-col">
          <button className={style.dropdown}>
            HTML , CSS
            <i class="fa-solid fa-angle-down"></i>
          </button>
          <button className={style.dropdown}>
            Javascript , React.Js <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div className={style.box}>
        <h4 className={style.bigbold}>MERN STACK</h4>
        <div className="flex flex-col">
          <button className={style.dropdown}>
            Javascript <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default module;
