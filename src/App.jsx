import { useState } from "react";
import Lottery from "./LoteryPage";
import { sum } from "./helper";
import "./App.css";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  // ! If every Ticket ARE SAME then win
  let winConditionEvery = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };
  return (
    <>
      <Lottery n={3} winCondition={winConditionEvery} />
    </>
  );
}

export default App;
