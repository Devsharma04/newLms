import style from "./card.module.css";
export default function bot({ filter }) {
  return (
    <div className={style.contain}>
      {filter.map((a, i) => {
        return (
          <div key={i} className={style.card}>
            <span className={style.textcol}>{a.topic}</span>
            <span>
              <i className="fa-solid fa-user-graduate"></i>
              &nbsp;&nbsp;{a.course}
            </span>
            <span>
              {" "}
              <i className="fa-solid fa-user"></i>&nbsp;&nbsp;{a.teach}
            </span>
            <span>
              {" "}
              <i className="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;{a.date}
            </span>
            <span>
              <i className="fa-regular fa-clock"></i>&nbsp;{a.time}
            </span>
            <div className={style.down}>
              <button>View Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
