import { useContext, useState } from "react";
import { tuesdayExercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard";
import ProgressBar from "../components/ProgressBar";
import WorkoutComplete from "../components/WorkoutComplete";
import { WorkoutContext } from "../context/WorkoutContext";
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
function TuesdayWorkout() {

  const { exerciseProgress, completeWorkout } = useContext(WorkoutContext);
  const [showComplete, setShowComplete] = useState(false);
  function handleLogout() {
  signOut(auth)
}
  const completedExercises = tuesdayExercises.filter((exercise) => {
    const data = exerciseProgress?.[exercise.name];
    return data?.setsCompleted >= exercise.sets;
  });

  const allCompleted =
    completedExercises.length === tuesdayExercises.length;

  function handleFinishWorkout() {

    if (!allCompleted) return;

    completeWorkout();
    setShowComplete(true);

  }

  return (
    
      

    <div className="min-h-screen bg-black text-white p-10">

  <div className="flex justify-end mb-6">
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
    Tuesday Workout (Back + Biceps)
  </h1>

      <ProgressBar
        completed={completedExercises.length}
        total={tuesdayExercises.length}
      />

      <div className="space-y-6 max-w-xl mx-auto mt-8">

        {tuesdayExercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
          />
        ))}

      </div>

      <div className="flex justify-center mt-10">

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

export default TuesdayWorkout;