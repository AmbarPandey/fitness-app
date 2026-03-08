import { useEffect, useState } from "react"
import { auth, db } from "../firebase"

import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged, signOut } from "firebase/auth"

import getTodayWorkout from "../utils/getTodayWorkout"

export default function Home() {

  const [userData, setUserData] = useState(null)

  const todayWorkout = getTodayWorkout()

  function handleLogout() {
    signOut(auth)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (!user) {
        setUserData(null)
        return
      }

      try {

        const userRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(userRef)

        if (docSnap.exists()) {
          setUserData(docSnap.data())
        } else {
          setUserData({
            username: "Unknown",
            bmi: "-",
            height: "-",
            weight: "-",
            category: "-",
            streak: 0,
            totalWorkouts: 0
          })
        }

      } catch (error) {
        console.error("Error loading profile:", error)
      }

    })

    return () => unsubscribe()

  }, [])

  if (!userData) {
    return (
      <div className="text-white flex items-center justify-center min-h-screen bg-black">
        Loading Profile...
      </div>
    )
  }

  return (

    <div className="text-white min-h-screen bg-black p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold">
          Today's Mission
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="bg-slate-900 p-6 rounded-xl max-w-3xl mx-auto mb-6">

        <h2 className="text-xl mb-4 font-bold">
          Athlete Profile
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-gray-400">Username</p>
            <p>{userData.username}</p>
          </div>

          <div>
            <p className="text-gray-400">BMI</p>
            <p>{userData.bmi}</p>
          </div>

          <div>
            <p className="text-gray-400">Height</p>
            <p>{userData.height} cm</p>
          </div>

          <div>
            <p className="text-gray-400">Weight</p>
            <p>{userData.weight} kg</p>
          </div>

          <div>
            <p className="text-gray-400">Category</p>
            <p>{userData.category}</p>
          </div>

        </div>
      <div className="flex justify-center mt-6">
  <a
    href="/ai-coach"
    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold"
  >
    Open AI Coach
  </a>
</div>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl max-w-3xl mx-auto mb-6">

        <h2 className="text-xl font-bold mb-3">
          Discipline System
        </h2>

        <p>🔥 Current Streak: {userData.streak}</p>
        <p>🏆 Total Workouts: {userData.totalWorkouts}</p>

      </div>

      <h2 className="text-2xl text-center mb-4">
        Today's Workout
      </h2>

      {!todayWorkout.exercises || todayWorkout.exercises.length === 0 ? (

        <p className="text-center text-gray-400">
          Rest Day — Recovery is part of discipline.
        </p>

      ) : (

        todayWorkout.exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-slate-900 p-4 rounded-lg max-w-2xl mx-auto mb-3"
          >
            {exercise.name}
          </div>
        ))

      )}

    </div>
  )
}