export async function POST(req){

  try{

    const body = await req.json()

    const message = body.message

    let reply = ""

    if(message.toLowerCase().includes("halo")){
      reply = "Halo juga 👋 Ada yang bisa saya bantu?"
    }
    else if(message.toLowerCase().includes("harga")){
      reply = "Silakan cek katalog produk untuk melihat harga terbaru."
    }
    else{
      reply = "Saya menerima pesan: " + message
    }

    return Response.json({
      reply
    })

  }catch(error){

    return Response.json({
      reply:"Terjadi error pada AI."
    })
  }

}
