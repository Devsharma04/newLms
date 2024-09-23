import style from "./mod.module.css";
import Card from "./Testcard";

function text() {
  let card = [
    { topic: "Core Python", duration: "45days", total: "29", fee: "₹ 11800" },
    {
      topic: "CCNA Networking",
      duration: "45days",
      total: "29",
      fee: "₹ 25000",
    },
    {
      topic: "Cyber Security",
      duration: "60days",
      total: "29",
      fee: "₹ 60000",
    },
    { topic: "Tableau", duration: "45days", total: "29", fee: "₹ 14160" },
    { topic: "PowerBI", duration: "30days", total: "29", fee: "₹ 14160" },
    {
      topic: "Python for Data analysis",
      duration: "60days",
      total: "29",
      fee: "₹ 30000",
    },
  ];
  return (
    <div className={style.main}>
      <div>
        <input type="text" id={style.input} placeholder="Search here" />
      </div>
      <div className={style.cardsWrapper}>
        <Card card={card} />
      </div>
    </div>
  );
}

export default text;
