export async function GET() {
    const msg = {
        message: "Welcome home"
    }
   
    return Response.json(msg)
  }