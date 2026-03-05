import { tricepsExercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard";

function TricepsWorkout(){

return(

<div className="h-screen bg-black text-white flex flex-col items-center pt-20 gap-10">

<h1 className="text-4xl font-bold">
Triceps Workout
</h1>

<div className="flex flex-col gap-6">

{tricepsExercises.map((exercise, index) => (
  <ExerciseCard key={index} exercise={exercise} />
))}

</div>

</div>

)

}

export default TricepsWorkout