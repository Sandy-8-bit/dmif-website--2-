import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to database
    const { db } = await connectToDatabase()

    // Create contact document
    const contactData = {
      firstName,
      lastName,
      email,
      phone: phone || "",
      subject,
      message,
      createdAt: new Date(),
      status: "new",
    }

    // Insert into database
    const result = await db.collection("contacts").insertOne(contactData)

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
