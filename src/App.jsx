import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MondayWorkout from "./pages/MondayWorkout";
import Tutorial from "./pages/Tutorial";

function App() {

  return (
    <Routes>

      <Route path="/" element={<Signup />} />

      <Route path="/home" element={<Home />} />

      <Route path="/monday-workout" element={<MondayWorkout />} />

      <Route path="/tutorial" element={<Tutorial />} />

    </Routes>
  );
}

export default App;