import { useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";

interface IState {
  count: number;
  id: number;
}

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

function App() {
  const reducer = (
    state: IState[],
    action: { type: string; payload: number },
  ) => {
    switch (action.type) {
      case "increment": {
        const updatedState = state.map((s) => {
          if (s.id === action.payload) {
            return { ...s, count: s.count + 1 };
          }
          return s;
        });
        return updatedState;
      }
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const totalCount = state.reduce((acc, current) => {
    return (acc += current.count);
  }, 0);

  const handleIncrement = (id: number) => {
    dispatch({ type: "increment", payload: id });
  };

  return (
    <>
      {state.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.count}
          onIncrement={() => handleIncrement(counter.id)}
        />
      ))}
      <h2>Stats: {totalCount}</h2>
    </>
  );
}

export default App;
