import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import "./Lottery.css";

function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWining = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="Totalpage">
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <h3>{isWining && "Congratulation,you won!"}</h3>
      <Button value={buyTicket} />
    </div>
  );
}

export default Lottery;
