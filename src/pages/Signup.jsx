import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

import { auth, db } from "../firebase"

export default function Signup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

  const handleSignup = async (e) => {

    e.preventDefault()

    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1)

      let category = ""

      if (bmi < 18.5) category = "Underweight"
      else if (bmi < 25) category = "Normal"
      else if (bmi < 30) category = "Overweight"
      else category = "Obese"

      await setDoc(doc(db, "users", user.uid), {
        email,
        username,
        height,
        weight,
        bmi,
        category,
        streak: 0,
        totalWorkouts: 0
      })

      alert("Account created successfully!")

      navigate("/home")

    } catch (error) {

      alert(error.message)

    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">

      <form
        onSubmit={handleSignup}
        className="bg-slate-900 p-8 rounded-xl w-80 space-y-4"
      >

        <h2 className="text-2xl text-center font-bold">Signup</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 bg-slate-800 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full p-2 bg-slate-800 rounded"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full p-2 bg-slate-800 rounded"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-slate-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-slate-800 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
        >
          Create Account
        </button>

      </form>

    </div>
  )
}