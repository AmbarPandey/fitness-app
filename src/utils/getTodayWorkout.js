import {
  mondayExercises,
  tuesdayExercises,
  wednesdayExercises,
  thursdayExercises,
  fridayExercises,
  saturdayExercises
} from "../data/exercises"

export default function getTodayWorkout() {

  const day = new Date().getDay()

  if (day === 1) return { exercises: mondayExercises }
  if (day === 2) return { exercises: tuesdayExercises }
  if (day === 3) return { exercises: wednesdayExercises }
  if (day === 4) return { exercises: thursdayExercises }
  if (day === 5) return { exercises: fridayExercises }
  if (day === 6) return { exercises: saturdayExercises }

  // Sunday (rest day)
  return { exercises: [] }

}