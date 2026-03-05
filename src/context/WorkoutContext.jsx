import { createContext, useState } from "react";

export const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {

  const [exerciseProgress, setExerciseProgress] = useState({});

  const completeSet = (exerciseName, totalSets) => {

    setExerciseProgress((prev) => {

      const currentSets = prev[exerciseName]?.setsCompleted || 0;

      if (currentSets >= totalSets) {
        return prev;
      }

      return {
        ...prev,
        [exerciseName]: {
          setsCompleted: currentSets + 1
        }
      };

    });

  };

  return (
    <WorkoutContext.Provider
      value={{
        exerciseProgress,
        completeSet
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}