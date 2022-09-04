import { useEffect, useRef } from "react";

const useEffectOnce = (cb, dependencies) => {
  const countCalls = useRef(0);

  useEffect(() => {
    console.log("ue-1")
    if (countCalls.current === 0) {
      cb();
      console.log("useEffect-1", countCalls.current);
      countCalls.current = 1;
    }

  }, []);

  useEffect(() => {
    console.log("ue-2")
    if (countCalls.current > 2) {
      console.log("useEffect-2", countCalls.current);
      cb();
    }
    countCalls.current++;
    if(countCalls.current === 10)countCalls.current = 3;
  }, [...dependencies]);
};

export { useEffectOnce };