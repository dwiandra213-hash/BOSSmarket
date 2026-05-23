
export default function AdminDashboard(){
  return(
    <main className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-5xl font-black">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          Total User
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          Total Sales
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          AI Analytics
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          Orders
        </div>
      </div>
    </main>
  )
}
