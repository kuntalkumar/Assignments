import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dec, inc } from '../Redux/action';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>Decrement</button>
    </div>
  );
};

export default Counter;
