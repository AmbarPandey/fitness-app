import { Routes, Route, Navigate } from "react-router-dom"
import AIWorkout from "./pages/AIWorkout"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"
import MondayWorkout from "./pages/MondayWorkout.jsx"
import TuesdayWorkout from "./pages/TuesdayWorkout.jsx"
import WednesdayWorkout from "./pages/WednesdayWorkout.jsx"
import ThursdayWorkout from "./pages/ThursdayWorkout.jsx"
import FridayWorkout from "./pages/FridayWorkout.jsx"
import SaturdayWorkout from "./pages/SaturdayWorkout.jsx"

import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export default function App() {

  const { user } = useContext(UserContext)

  return (
    <Routes>

      {/* If logged in → go to home */}
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
      {/* Workouts */}
      <Route path="/monday" element={user ? <MondayWorkout /> : <Navigate to="/login" />} />
      <Route path="/tuesday" element={user ? <TuesdayWorkout /> : <Navigate to="/login" />} />
      <Route path="/wednesday" element={user ? <WednesdayWorkout /> : <Navigate to="/login" />} />
      <Route path="/thursday" element={user ? <ThursdayWorkout /> : <Navigate to="/login" />} />
      <Route path="/friday" element={<FridayWorkout />} />
      <Route path="/saturday" element={<SaturdayWorkout />} />
      <Route path="/ai-coach" element={<AIWorkout />} />
    </Routes>
  )
}