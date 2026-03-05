import { chestExercises, tricepsExercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard";
import Stopwatch from "../components/Stopwatch";
import { useState } from "react";

function MondayWorkout() {

  const mondayExercises = [...chestExercises, ...tricepsExercises];

  const [activeExercise, setActiveExercise] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Monday Workout (Chest + Triceps)
      </h1>

      <div className="space-y-6 max-w-xl mx-auto">

        {mondayExercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
            onStart={setActiveExercise}
          />
        ))}

      </div>

      {activeExercise && (
        <Stopwatch
          exercise={activeExercise}
          close={() => setActiveExercise(null)}
        />
      )}

    </div>
  );
}

export default MondayWorkout;