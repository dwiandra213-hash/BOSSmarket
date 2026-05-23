
require("dotenv").config()

const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/login",(req,res)=>{

  const token = jwt.sign(
    { email:req.body.email },
    process.env.JWT_SECRET,
    { expiresIn:"7d" }
  )

  res.json({ token })
})

app.post("/api/ai", async(req,res)=>{

  const { message } = req.body

  let reply = "Terima kasih 😊"

  if(message.toLowerCase().includes("harga")){
    reply = "Harga tersedia sesuai produk."
  }

  if(message.toLowerCase().includes("promo")){
    reply = "Saat ini tersedia promo khusus."
  }

  res.json({ reply })
})

app.listen(5000,()=>{
  console.log("Server running on 5000")
})
