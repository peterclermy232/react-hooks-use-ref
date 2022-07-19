import React, { useEffect, useState,useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  // create the ref and set its initial value
  const prevPriceRef = useRef(price);

  useEffect(() => {
    // use the current value of the ref
    const prevPrice = prevPrice.current;
    if(price > prevPrice){
      setColor("green");
    }else if(price < prevPrice){
      setColor("red");
    }else{
      setColor("black");
    }
    // set the new value of the ref (note: this doesn't trigger a re-render)
    prevPrice.current
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
