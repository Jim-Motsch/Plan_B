import { NextResponse } from 'next/server'

// the devices array lives HERE now — moved out of page.tsx
const devices = [
    { id: "511168", name: "John", date: "2023", model: "2120" },
    { id: "511169", name: "Joh", date: "2023", model: "2120" },
    { id: "511170", name: "Jo", date: "2024", model: "2120" },
    { id: "511171", name: "J", date: "2024", model: "2120" },
    { id: "511172", name: "Dan", date: "2024", model: "2120" }
];

export async function GET(request: Request) {
    const tag = request.nextUrl.searchParams.get("tag")
    
      for (const device of devices) {
        if (tag === device.id) {
          return NextResponse.json(device)
      }
    }
    return NextResponse.json({error: "Not Found"}, {status: 404})
}