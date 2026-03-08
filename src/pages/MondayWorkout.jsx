
import { useContext, useState } from "react";
import { mondayExercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard";
import ProgressBar from "../components/ProgressBar";
import { WorkoutContext } from "../context/WorkoutContext";
import RestTimer from "../components/RestTimer";
import WorkoutComplete from "../components/WorkoutComplete";
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function MondayWorkout() {

  const { exerciseProgress, completeWorkout } = useContext(WorkoutContext);
  const [showComplete, setShowComplete] = useState(false);
  function handleLogout() {
  signOut(auth)
}
  const completedExercises = mondayExercises.filter((exercise) => {
    const data = exerciseProgress?.[exercise.name];
    return data?.setsCompleted >= exercise.sets;
  });

  const allCompleted =
    completedExercises.length === mondayExercises.length;
  
  
  function handleFinishWorkout() {

    if (!allCompleted) return;

    completeWorkout();
    setShowComplete(true);

  }

  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* Logout Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
      
      <div className="flex justify-end mb-6 gap-3">

  <a
    href="/ai-coach"
    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
  >
    AI Coach
  </a>

  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
  >
    Logout
  </button>

</div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Monday Workout (Chest + Triceps)
      </h1>

      <ProgressBar
        completed={completedExercises.length}
        total={mondayExercises.length}
      />

      <div className="grid md:grid-cols-2 gap-6">

        {mondayExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.name}
            exercise={exercise}
          />
        ))}

      </div>

      <RestTimer />

      <div className="flex justify-center mt-8">

        <button
          onClick={handleFinishWorkout}
          disabled={!allCompleted}
          className={`px-8 py-3 rounded-xl font-bold ${
            allCompleted
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Finish Workout
        </button>

      </div>

      <WorkoutComplete show={showComplete} />

    </div>

  );
}

export default MondayWorkout;