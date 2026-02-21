const Counter = ({
  count,
  onIncrement,
}: {
  count: number;
  onIncrement: () => void;
}) => {
  return (
    <>
      <div>Counter {count}</div>
      <button onClick={onIncrement}>Increment</button> <br />
    </>
  );
};

export default Counter;
