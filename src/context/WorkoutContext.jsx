import { createContext, useState, useEffect } from "react"

export const WorkoutContext = createContext()

export function WorkoutProvider({ children }) {

  const [exerciseProgress, setExerciseProgress] = useState(() => {
  try {
    const saved = localStorage.getItem("exerciseProgress")
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
})

  const [discipline, setDiscipline] = useState(() => {
  try {
    const saved = localStorage.getItem("discipline")
    return saved
      ? JSON.parse(saved)
      : { streak: 0, totalWorkouts: 0 }
  } catch {
    return { streak: 0, totalWorkouts: 0 }
  }
})

  const [workoutHistory, setWorkoutHistory] = useState(() => {
  try {
    const saved = localStorage.getItem("workoutHistory")
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
})

  useEffect(() => {
    localStorage.setItem("exerciseProgress", JSON.stringify(exerciseProgress))
  }, [exerciseProgress])

  useEffect(() => {
    localStorage.setItem("discipline", JSON.stringify(discipline))
  }, [discipline])

  useEffect(() => {
    localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory))
  }, [workoutHistory])

  function submitReps(name, reps, goalSets, goalReps) {

    setExerciseProgress(prev => {

      const prevData = prev[name] || {
        totalReps: 0,
        setsCompleted: 0,
        level: "Beginner"
      }

      const newTotalReps = prevData.totalReps + reps

const newSetsCompleted = Math.min(
  prevData.setsCompleted + 1,
  goalSets
)

      const updated = {
        ...prev,
        [name]: {
          ...prevData,
          totalReps: newTotalReps,
          setsCompleted: newSetsCompleted
        }
      }

      if (newSetsCompleted === goalSets && prevData.setsCompleted < goalSets) {

        setDiscipline(d => ({
          ...d,
          totalWorkouts: d.totalWorkouts + 1
        }))

        setWorkoutHistory(h => [
          ...h,
          {
            exercise: name,
            date: new Date().toLocaleDateString(),
            reps: newTotalReps
          }
        ])

      }

      return updated

    })

  }

  return (
    <WorkoutContext.Provider
      value={{
  exerciseProgress,
  submitReps,
  completeWorkout,
  discipline,
  workoutHistory
}}
    >
      {children}
    </WorkoutContext.Provider>
  )
}
  
  function completeWorkout() {

  const today = new Date().toLocaleDateString()

  setWorkoutHistory(h => [
    ...h,
    {
      workout: "Completed",
      date: today
    }
  ])

  setDiscipline(d => ({
    ...d,
    streak: d.streak + 1,
    totalWorkouts: d.totalWorkouts + 1
  }))

}