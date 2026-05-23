
import AIAssistant from "../components/AIAssistant"

export default function Home(){
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-black">
        BOSS MARKET AI V3
      </h1>

      <p className="mt-6 text-zinc-400 max-w-2xl">
        AI Marketplace platform with automation and dashboard.
      </p>

      <AIAssistant />
    </main>
  )
}
