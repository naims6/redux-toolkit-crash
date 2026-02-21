import CounterRedux from "./features/counter/Counter";
import Stats from "./features/counter/Stats";
import { useAppDispatch, useAppSelector } from "./app/hooks/hooks";
import Posts from "./components/Posts";

function LWS() {
  const counters = useAppSelector((state) => state.counters);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Redux start</h1>
      <CounterRedux counters={counters} dispatch={dispatch} /> <br />
      <Stats />
      <hr />
      <Posts />
    </>
  );
}

export default LWS;
