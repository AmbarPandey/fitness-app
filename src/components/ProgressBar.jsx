function ProgressBar({ completed, total }) {

  const percentage = total === 0
    ? 0
    : Math.floor((completed / total) * 100);

  return (

    <div className="w-full bg-gray-800 rounded-xl p-3 space-y-2">

      <div className="flex justify-between text-sm text-gray-300">

        <span>Workout Progress</span>
        <span>{completed} / {total} ({percentage}%)</span>

      </div>

      <div className="w-full bg-gray-700 rounded-full h-3">

        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>

  );
}

export default ProgressBar;