import { useState, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import Stopwatch from "./Stopwatch";
import { useNavigate } from "react-router-dom";

function ExerciseCard({ exercise }) {

  const navigate = useNavigate();

  const { exerciseProgress, completeSet } = useContext(WorkoutContext);

  const completedSets = exerciseProgress[exercise.name]?.setsCompleted || 0;

  const [showTimer, setShowTimer] = useState(false);
  const [restTime, setRestTime] = useState(0);

  function handleCompleteSet() {

    completeSet(exercise.name, exercise.sets);

    setShowTimer(false);

    setRestTime(exercise.rest);

    const interval = setInterval(() => {
      setRestTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <div className="bg-slate-900 border border-blue-500 p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>

      <p className="text-gray-300">
        Goal: {exercise.sets} sets × {exercise.reps} reps
      </p>

      <p className="text-gray-400 mb-4">
        Completed Sets: {completedSets}/{exercise.sets}
      </p>

      {restTime > 0 && (
        <p className="text-yellow-400 mb-4">
          Rest: {restTime}s
        </p>
      )}

      <div className="flex gap-4 flex-wrap">

        <button
          onClick={() =>
            navigate("/tutorial", { state: { video: exercise.video } })
          }
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Watch Tutorial
        </button>

        {!showTimer && completedSets < exercise.sets && (
          <button
            onClick={() => setShowTimer(true)}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Start Exercise
          </button>
        )}

      </div>

      {showTimer && (
        <div className="mt-6">

          <Stopwatch />

          <button
            onClick={handleCompleteSet}
            className="bg-blue-500 mt-4 px-4 py-2 rounded"
          >
            Complete Set
          </button>

        </div>
      )}

    </div>
  );
}

export default ExerciseCard;