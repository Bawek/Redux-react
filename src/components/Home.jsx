import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "../redux/Counter/counterSlice"
const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Access dispatch function

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={()=>dispatch(increment())} className="p-10">+</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    gggg</div>
  );
};

export default Counter;
