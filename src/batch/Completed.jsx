import style from "./complet.module.css";
function top() {
  let Card = [
    {
      topic: "Frontend/dev/23-sep",
      course: "MERN STACK",
      teach: "Dev",
      date: "2023-9-23",
      time: "10:00AM",
    },
    {
      topic: "10am/FS/Nitin/4-mar",
      course: "MERN STACK",
      teach: "Dev",
      date: "2024-3-04",
      time: "10:00AM",
    },
    {
      topic: "4:30/FS/Nitin/13-mar",
      course: "MERN STACK",
      teach: "Dev",
      date: "2024-3-13",
      time: "4:30PM",
    },
    {
      topic: "3pm/DM/15-aprail",
      course: "Digital Marketing",
      teach: "Dev",
      date: "2024-4-15",
      time: "3:00PM",
    },
    {
      topic: "4:30/FS/13-may",
      course: "MERN STACK",
      teach: "Dev",
      date: "2024-8-4",
      time: "4:00PM",
    },
  ];

  return (
    <div className={style.contain}>
      {Card.map((a) => {
        return (
          <div className={style.card}>
            <span className={style.textcol}>{a.topic}</span>
            <span>
              <i className="fa-solid fa-user-graduate"></i>
              &nbsp;&nbsp;{a.course}
            </span>
            <span>
              <i class="fa-solid fa-user"></i>&nbsp;&nbsp;{a.teach}
            </span>
            <span>
              <i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;{a.date}
            </span>
            <span>
              <i class="fa-regular fa-clock"></i>&nbsp;{a.time}
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

export default top;
