import { useState, useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

function ExerciseCard({ exercise }) {

  const { exerciseProgress, submitReps } = useContext(WorkoutContext)

  const [reps, setReps] = useState("")
  const [restTimer, setRestTimer] = useState(null)

  const data = exerciseProgress?.[exercise.name] || {}

  const setsCompleted = data.setsCompleted || 0
  const totalReps = data.totalReps || 0
  const level = data.level || "Beginner"

  const goalSets = exercise.sets

  const progressPercent = Math.min(
    (setsCompleted / goalSets) * 100,
    100
  )

  function handleSubmit() {

    if (!reps) return

    if (setsCompleted >= goalSets) return

    submitReps(
      exercise.name,
      Number(reps),
      goalSets,
      exercise.reps
    )

    setReps("")

    const restSeconds = Number(exercise.rest) || 60

    setRestTimer(restSeconds)

    const interval = setInterval(() => {

      setRestTimer(prev => {

        if (prev <= 1) {
          clearInterval(interval)
          return null
        }

        return prev - 1

      })

    }, 1000)

  }

  return (

    <div className="bg-gray-900 p-6 rounded-xl mb-8 shadow-lg">

      <div className="flex justify-between items-center mb-3">

        <h2 className="text-xl font-bold">
          {exercise.name}
        </h2>

        <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
          {level}
        </span>

      </div>

      <p className="text-gray-400 mb-1">
        Goal: {goalSets} sets × {exercise.reps}
      </p>

      <p className="text-blue-400 mb-3">
        Sets Completed: {setsCompleted}/{goalSets}
      </p>

      <p className="text-yellow-400 mb-4">
        Total Reps Performed: {totalReps}
      </p>

      <video
        src={exercise.video}
        controls
        className="w-full rounded-lg mb-4"
      />

      <div className="w-full bg-gray-700 rounded-full h-3 mb-4">

        <div
          className="bg-blue-500 h-3 rounded-full transition-all"
          style={{ width: `${progressPercent}%` }}
        />

      </div>

      <input
        type="number"
        placeholder="Enter reps performed"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
      />

      <button
        onClick={handleSubmit}
        disabled={setsCompleted >= goalSets}
        className={`w-full p-3 rounded-lg font-bold ${
          setsCompleted >= goalSets
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {setsCompleted >= goalSets ? "Exercise Completed" : "Complete Set"}
      </button>

      {restTimer !== null && (

        <div className="fixed bottom-10 right-10 bg-blue-900 p-8 rounded-xl shadow-2xl text-center">

          <h2 className="text-yellow-400 text-xl font-bold mb-2">
            Rest Time
          </h2>

          <p className="text-4xl font-bold">
            {restTimer}s
          </p>

        </div>

      )}

    </div>

  )
}

export default ExerciseCard