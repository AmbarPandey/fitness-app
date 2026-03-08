import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

function StreakCalendar() {

  const { discipline } = useContext(WorkoutContext)

  const days = Array.from({ length: 7 })

  return (

    <div className="bg-gray-900 p-6 rounded-xl mb-8">

      <h2 className="text-xl font-bold mb-4">
        Weekly Discipline
      </h2>

      <div className="flex gap-3">

        {days.map((_, i) => (

          <div
            key={i}
            className="w-10 h-10 rounded bg-green-600 flex items-center justify-center"
          >

            🔥

          </div>

        ))}

      </div>

    </div>

  )

}

export default StreakCalendar