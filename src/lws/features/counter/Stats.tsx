import { useAppSelector } from "../../../app/hooks/hooks";


const Stats = () => {
      const counters = useAppSelector((state) => state.counters);
    
      const totalCount = counters.reduce((acc, value) => {
        return (acc += value.count);
      }, 0);
  return <div>Stats : {totalCount}</div>;
};

export default Stats;
