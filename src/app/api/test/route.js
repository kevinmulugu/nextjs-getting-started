import { cookies, headers } from "next/headers";

export async function GET() {

    const cookieStore = cookies()
    const headerList = headers()
    cookieStore.set('name', 'kevin');
    const reqCookies = cookieStore.getAll()
    const msg = {
        message: "Welcome to test",
        cookies: reqCookies,
        headers: headerList
    }
   
    return Response.json(msg)
  }