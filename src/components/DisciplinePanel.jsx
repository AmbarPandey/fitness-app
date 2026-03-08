import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

function DisciplinePanel() {

  const { discipline } = useContext(WorkoutContext);

  return (
    <div className="bg-gray-900 p-6 rounded-xl mt-8">

      <h2 className="text-xl font-bold mb-4">
        Discipline Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div>
          <p className="text-gray-400">Current Streak</p>
          <p className="text-2xl font-bold text-green-400">
            {discipline.streak} days
          </p>
        </div>

        <div>
          <p className="text-gray-400">Discipline Score</p>
          <p className="text-2xl font-bold text-yellow-400">
            {discipline.disciplineScore}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Missed Days</p>
          <p className="text-2xl font-bold text-red-400">
            {discipline.missedDays.length}
          </p>
        </div>

      </div>

    </div>
  );
}

export default DisciplinePanel;