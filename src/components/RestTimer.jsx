import { useState, useEffect } from "react";

function RestTimer({ time }) {

  const [restTime, setRestTime] = useState(time || 0);

  useEffect(() => {

    if (restTime <= 0) return;

    const timer = setInterval(() => {
      setRestTime(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [restTime]);

  if (restTime <= 0) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

      <div className="bg-slate-900 p-10 rounded-2xl text-center shadow-xl">

        <h2 className="text-yellow-400 text-3xl font-bold">
          Rest Time
        </h2>

        <p className="text-white text-6xl font-bold mt-4">
          {restTime}s
        </p>

      </div>

    </div>

  );

}

export default RestTimer;