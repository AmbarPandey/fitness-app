import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Signup() {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [level, setLevel] = useState("Beginner");

  function handleSignup() {

    const userData = {
      username,
      height,
      weight,
      level
    };

    setUser(userData);

    // navigate to home page
    navigate("/home");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-slate-900 p-8 rounded-xl w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Your Fitness Profile
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full p-3 mb-4 rounded text-black"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full p-3 mb-4 rounded text-black"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <select
          className="w-full p-3 mb-6 rounded text-black"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 p-3 rounded"
        >
          Start Training
        </button>

      </div>

    </div>
  );
}

export default Signup;