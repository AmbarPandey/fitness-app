import { useState, useEffect, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

function Stopwatch({ exercise }) {

  const { completeSet } = useContext(WorkoutContext);

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [rest, setRest] = useState(0);

  useEffect(() => {

    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [running]);

  useEffect(() => {

    if (rest > 0) {
      const restTimer = setInterval(() => {
        setRest(prev => prev - 1);
      }, 1000);

      return () => clearInterval(restTimer);
    }

  }, [rest]);

  function handleCompleteSet() {

    setRunning(false);
    setSeconds(0);

    completeSet(exercise.name, exercise.sets);

    setRest(exercise.rest);
  }

  return (
    <div className="mt-4">

      <p className="text-xl mb-3">Timer: {seconds}s</p>

      <div className="flex gap-3">

        {!running && (
          <button
            onClick={() => setRunning(true)}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Start
          </button>
        )}

        {running && (
          <button
            onClick={() => setRunning(false)}
            className="bg-yellow-500 px-4 py-2 rounded"
          >
            Pause
          </button>
        )}

        {!running && seconds > 0 && (
          <button
            onClick={() => setRunning(true)}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Resume
          </button>
        )}

        <button
          onClick={handleCompleteSet}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Complete Set
        </button>

      </div>

      {rest > 0 && (
        <p className="text-yellow-400 mt-3">
          Rest Time: {rest}s
        </p>
      )}

    </div>
  );
}

export default Stopwatch;