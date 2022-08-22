import { useState, useEffect } from "react";
import ClockList from "../components/clock-list";
import LocalClock from "../components/local-clock";
import useClock from "../hooks/useClock";
import { generate } from "shortid";
import useEvents from "../hooks/useEvents";
import { object } from "prop-types";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;

      return clock;
    });

    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);

    setClocks(updatedClocks);
  };

  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />

      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
        localClock={localClock.date}
      />
    </div>
  );
}

export default App;
