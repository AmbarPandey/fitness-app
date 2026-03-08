import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

function Dashboard() {

  const { performance } = useContext(WorkoutContext);

  // prevent crash if performance is undefined
  const data = performance || {};

  const exercises = Object.keys(data);

  const completed = exercises.filter(
    (ex) => data[ex]?.completed
  ).length;

  const total = exercises.length || 1;

  const percent = Math.round((completed / total) * 100);

  return (
    <div className="bg-[#0f1a2e] rounded-xl p-6 mb-10 w-full max-w-4xl">

      <h2 className="text-2xl font-bold mb-6">
        Performance Dashboard
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <p className="text-gray-400">Completed</p>
          <p className="text-xl font-bold">{completed}</p>
        </div>

        <div>
          <p className="text-gray-400">Total Exercises</p>
          <p className="text-xl font-bold">{exercises.length}</p>
        </div>

        <div>
          <p className="text-gray-400">Completion</p>
          <p className="text-xl font-bold">{percent}%</p>
        </div>

        <div>
          <p className="text-gray-400">Status</p>
          <p className="text-xl font-bold text-green-400">
            {percent >= 70 ? "Strong" : "Needs Work"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;