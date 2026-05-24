"use client"

import { useState } from "react"

export default function AIAssistant() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Halo 👋 Saya AI Assistant."
    }
  ])

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  async function sendMessage() {

    if (!input.trim()) return

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        text: input
      }
    ]

    setMessages(updatedMessages)
    setLoading(true)

    const userMessage = input
    setInput("")

    try {

      // AI fake response sementara
      await new Promise(resolve => setTimeout(resolve, 1000))

      let reply = ""

      if (userMessage.toLowerCase().includes("halo")) {
        reply = "Halo juga 👋"
      }
      else if (userMessage.toLowerCase().includes("harga")) {
        reply = "Silakan cek harga terbaru di dashboard."
      }
      else if (userMessage.toLowerCase().includes("produk")) {
        reply = "Produk tersedia dan siap dijual."
      }
      else {
        reply = "BOSS AI menerima pesan: " + userMessage
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: reply
        }
      ])

    } catch (error) {

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text: "Server AI error."
        }
      ])

    }

    setLoading(false)
  }

  return (

    <div className="fixed bottom-5 right-5 w-96 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">

      <div className="bg-yellow-400 text-black p-4 font-bold text-lg">
        BOSS AI
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.role === "assistant"
                ? "bg-zinc-800 text-white p-3 rounded-xl"
                : "bg-yellow-400 text-black p-3 rounded-xl text-right"
            }
          >
            {msg.text}
          </div>

        ))}

        {loading && (
          <div className="bg-zinc-800 text-white p-3 rounded-xl">
            Mengetik...
          </div>
        )}

      </div>

      <div className="flex border-t border-zinc-700">

        <input
          className="flex-1 p-4 bg-black text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pesan..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage()
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-yellow-400 text-black px-5 font-bold"
        >
          Kirim
        </button>

      </div>

    </div>
  )
}
