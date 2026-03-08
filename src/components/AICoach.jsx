import { useState } from "react"

function generateAIResponse(message) {

  const text = message.toLowerCase()

  if (text.includes("pushup") || text.includes("push-up")) {
    return "To increase pushups: train chest 3 times a week, control your tempo, and progressively increase reps."
  }

  if (text.includes("biceps")) {
    return "For stronger biceps focus on slow curls and full range of motion. Consistency builds size."
  }

  if (text.includes("legs")) {
    return "Leg strength comes from progressive overload. Squats and controlled reps will build power."
  }

  if (text.includes("motivate") || text.includes("motivation")) {
    return "Motivation fades. Discipline remains. Show up even when you don't feel like it."
  }

  if (text.includes("diet") || text.includes("nutrition")) {
    return "Muscle is built in the gym but fueled in the kitchen. Prioritize protein and whole foods."
  }

  if (text.includes("beginner")) {
    return "Beginners should focus on form first. Strength will come naturally with consistency."
  }

  return "Train hard, recover well, and stay consistent. Your future self will thank you."
}

function AICoach() {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello athlete. I'm your AI fitness coach. Ask me anything about workouts."
    }
  ])

  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)

  function sendMessage() {

    if (!input.trim()) return

    const userMessage = {
      sender: "user",
      text: input
    }

    const aiMessage = {
      sender: "ai",
      text: generateAIResponse(input)
    }

    setMessages(prev => [...prev, userMessage, aiMessage])

    setInput("")
  }

  return (

    <div>

      {/* Toggle Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg"
      >
        AI Coach
      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl flex flex-col">

          <div className="p-3 border-b border-gray-700 text-center font-bold">
            AI Fitness Coach
          </div>

          <div className="h-72 overflow-y-auto p-3 space-y-3">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {msg.text}
              </div>

            ))}

          </div>

          <div className="flex border-t border-gray-700">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your AI coach..."
              className="flex-1 p-2 bg-gray-800 text-white outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-4 bg-blue-600 hover:bg-blue-700"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </div>

  )
}

export default AICoach