import style from "./result.module.css";

function result() {
  return (
    <div className={style.down}>
      <div className={style.box2}>
        <label htmlFor="">Select Batch</label>
        <select name="" id="">
          <option value="">Select Batch</option>
          <option value="">Evening</option>
          <option value="">Morning</option>
        </select>
      </div>
    </div>
  );
}

export default result;
