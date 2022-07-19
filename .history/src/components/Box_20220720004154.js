import React, { useRef } from "react";

const elementRef = useRef();

function Box() {
 
  function handleMeasureClick(){
    const div = elementRef.current;
    console.log("Measurements: ", div.getBoundingClientRect())
  }
  

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick=>Measure</button>
    </div>
  );
}

export default Box;
