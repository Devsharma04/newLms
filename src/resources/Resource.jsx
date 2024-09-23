import style from "./resource.module.css";
function resource() {
  return (
    <div className={style.main}>
      <div className={style.Tflex}>
        <span className={style.textupper}>ALL RESOURCES</span>
        <button>Add Resources</button>
      </div>
      <div className={style.down}>
        <span className={style.textdown}>No Resources Available</span>
      </div>
    </div>
  );
}

export default resource;
