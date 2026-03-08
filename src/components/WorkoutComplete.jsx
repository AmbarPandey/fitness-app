function WorkoutComplete({ show }) {

  if (!show) return null

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">

      <div className="bg-gray-900 p-10 rounded-xl text-center animate-pulse">

        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Workout Completed
        </h1>

        <p className="text-gray-300 text-lg">
          Discipline beats motivation.
        </p>

      </div>

    </div>

  )

}

export default WorkoutComplete