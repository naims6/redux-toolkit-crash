import type { AppDispatch } from "../../app/store";
import {
  decrement,
  increment,
  incrementByAmount,
  type CounterState,
} from "./counterSlice";

const CounterRedux = ({
  counters,
  dispatch,
}: {
  counters: CounterState[];
  dispatch: AppDispatch;
}) => {
  return (
    <div>
      {counters.map((count, key) => (
        <>
          <div key={key}>
            <button onClick={() => dispatch(increment({ id: count.id }))}>
              Increment
            </button>
            <span>{count.count}</span>
            <button onClick={() => dispatch(decrement({ id: count.id }))}>
              Decrement
            </button>
            <button
              onClick={() =>
                dispatch(incrementByAmount({ id: count.id, value: 10 }))
              }
            >
              Increase by value
            </button>{" "}
            <br />
          </div>
        </>
      ))}
    </div>
  );
};

export default CounterRedux;
