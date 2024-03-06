import React from "react";
import { useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(handleAddActionObj(1));
  };

  const handleDecrement = () => {
    dispatch(handleReduceActionObj(1));
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleIncrement}>ADD</button>
      <button data-testid="reduceButton" onClick={handleDecrement}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;










