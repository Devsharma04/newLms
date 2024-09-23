import style from "./createst.module.css";

function Createst() {
  return (
    <div className={style.down}>
      <div className={style.box}>
        Test Name <input type="text" placeholder="Test Name" />
      </div>
      <div className={style.box}>
        Test Duration (minutes) <input type="text" placeholder="Test Name" />
      </div>
      <div className={style.box2}>
        <label htmlFor="Course">Select Course</label>
        <select name="" id="">
          <option value="">Select Course</option>
          <option value="">Mern Stack</option>
          <option value="">Digital Markiting</option>
        </select>
      </div>
    </div>
  );
}

export default Createst;
