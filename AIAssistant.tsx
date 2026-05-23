
"use client"
import { useState } from "react"

export default function AIAssistant(){

  const [messages,setMessages] = useState([
    {role:"assistant",text:"Halo 👋 Saya AI Assistant."}
  ])

  const [input,setInput] = useState("")

  async function sendMessage(){

    if(!input) return

    const updated = [...messages,{role:"user",text:input}]
    setMessages(updated)

    try{

      const res = await fetch("http://localhost:5000/api/ai",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({message:input})
      })

      const data = await res.json()

      setMessages([
        ...updated,
        {role:"assistant",text:data.reply}
      ])

    }catch(err){

      setMessages([
        ...updated,
        {role:"assistant",text:"AI server offline."}
      ])
    }

    setInput("")
  }

  return(
    <div className="fixed bottom-5 right-5 w-96 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700">

      <div className="bg-yellow-400 text-black p-4 font-bold">
        BOSS AI
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((msg,index)=>(
          <div key={index}
            className={msg.role==="assistant"
            ? "bg-zinc-800 p-3 rounded-xl"
            : "bg-yellow-400 text-black p-3 rounded-xl text-right"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          className="flex-1 p-4 bg-black outline-none"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Tulis pesan..."
        />

        <button
          onClick={sendMessage}
          className="bg-yellow-400 text-black px-5 font-bold">
          Kirim
        </button>
      </div>
    </div>
  )
}
