import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

function WorkoutHistory() {

  const { workoutHistory } = useContext(WorkoutContext)

  return (

    <div className="max-w-4xl mx-auto text-white p-8">

      <h1 className="text-3xl font-bold mb-6">
        Workout History
      </h1>

      {workoutHistory.length === 0 ? (

        <p>No workouts completed yet</p>

      ) : (

        workoutHistory.map((w, index) => (

          <div
            key={index}
            className="bg-gray-900 p-4 mb-4 rounded-lg"
          >

            <p className="font-bold">{w.exercise}</p>
            <p>Reps: {w.reps}</p>
            <p>Date: {w.date}</p>

          </div>

        ))

      )}

    </div>

  )

}

export default WorkoutHistory