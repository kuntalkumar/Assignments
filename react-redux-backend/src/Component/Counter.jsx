import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButton";

const Counter = () => {
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      <CounterValue/>

      <CounterButtons/>
    </div>
  );
};

export default Counter;