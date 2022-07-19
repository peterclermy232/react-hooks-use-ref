import React, { useRef } from "react";

const elementRef = useRef();

function handleMeasureClick(){
  const div = elementRef.
}

function Box() {
  const elementRef = useRef();

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button>Measure</button>
    </div>
  );
}

export default Box;
