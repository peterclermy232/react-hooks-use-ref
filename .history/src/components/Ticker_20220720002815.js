import React, { useEffect, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    // use the current value of the ref
    const prevPrice = pre
  })

  useEffect(() => {
    // every 1 second , generate a new random price
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
