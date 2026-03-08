import { useState } from "react";

function AIWorkout() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askCoach() {

    if (!question) return;

    const q = question.toLowerCase();

    if (q.includes("pushup") || q.includes("push up")) {
      setAnswer(
        "Keep your body straight, core tight, and elbows at about 45 degrees. Lower your chest close to the floor and push back up without locking your elbows."
      );
    }

    else if (q.includes("squat")) {
      setAnswer(
        "Stand with feet shoulder-width apart. Push your hips back, keep chest up, and lower until thighs are parallel to the floor. Drive through your heels to stand."
      );
    }

    else if (q.includes("plank")) {
      setAnswer(
        "Keep your body in a straight line from head to heels. Tighten your core and glutes. Avoid letting your hips sag or lifting them too high."
      );
    }

    else if (q.includes("warm up")) {
      setAnswer(
        "A good warm up includes light cardio for 3–5 minutes, dynamic stretches, and easy versions of your main exercises."
      );
    }

    else if (q.includes("rest")) {
      setAnswer(
        "Rest 45–90 seconds between sets for strength exercises and 30–60 seconds for endurance exercises."
      );
    }

    else {
      setAnswer(
        "Focus on good form, controlled movement, and breathing. If you feel pain (not normal muscle fatigue), stop the exercise."
      );
    }

  }

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-8">
        AI Fitness Coach
      </h1>

      <p className="mb-6 text-gray-400 text-center max-w-xl">
        Ask any question about workouts, exercise form, warm-ups, or training tips.
      </p>

      <input
        type="text"
        placeholder="Example: How to do pushups correctly?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-4 rounded text-black w-96 mb-6"
      />

      <button
        onClick={askCoach}
        className="bg-purple-600 px-6 py-3 rounded-lg text-lg"
      >
        Ask Coach
      </button>

      {answer && (

        <div className="mt-10 bg-blue-950 p-6 rounded-xl w-[500px]">

          <h2 className="text-xl mb-4">
            Coach Advice
          </h2>

          <p>{answer}</p>

        </div>

      )}

    </div>
  );
}

export default AIWorkout;