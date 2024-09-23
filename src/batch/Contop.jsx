import "./contop.css";
import Bot from "./Bottom";
import Upcoming from "./Upcoming";
import Complet from "./Completed";
import { useEffect, useState } from "react";
export default function top() {
  let [comp, SetComp] = useState(1);
  let [varcol, setvarcol] = useState(1);

  function comp_load(a) {
    comp = a;
    varcol = a;
    SetComp(comp);
    setvarcol(varcol);
  }
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
      teach: "Aman",
      date: "2024-3-04",
      time: "10:00AM",
    },
    {
      topic: "4:30/FS/Nitin/13-mar",
      course: "MERN STACK",
      teach: "Bob",
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
    {
      topic: "12pm/DM/4-june",
      course: "Digital marketing",
      teach: "Dev",
      date: "2024-10-13",
      time: "12:00PM",
    },
  ];
  let [value, setvalue] = useState("");
  const [filter, setfilter] = useState(Card);
  let main_val = value.toLowerCase();

  function Search() {
    let filter_card = Card.filter((cart) => {
      let Keys = Object.keys(cart);
      for (let i = 0; i < Keys.length; i++) {
        let keyarr = Keys[i];
        if (String(cart[keyarr]).toLowerCase().includes(main_val) === true) {
          return cart;
        }
      }
    });
    setfilter(filter_card);
  }
  useEffect(() => {
    Search();
  }, [value]);
  return (
    <div className={"batch_main"}>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          id={"input"}
          placeholder="Search here"
        />
      </div>
      <div className={"down"}>
        <button
          className={varcol === 1 ? "clickx" : "buttonx"}
          onClick={() => comp_load(1)}
        >
          Current
        </button>
        <button
          className={varcol === 2 ? "clickx" : "buttonx"}
          onClick={() => comp_load(2)}
        >
          Upcoming
        </button>
        <button
          className={varcol === 3 ? "clickx" : "buttonx"}
          onClick={() => comp_load(3)}
        >
          Completed
        </button>
      </div>
      <div className={"cardswrapper"}>
        {comp === 1 && <Bot Card={Card} filter={filter}></Bot>}
        {comp === 2 && <Upcoming />}
        {comp === 3 && <Complet />}
      </div>
    </div>
  );
}
