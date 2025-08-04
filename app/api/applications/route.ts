import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      whatsapp,
      country,
      educationLevel,
      fieldOfStudy,
      institution,
      yearOfStudy,
      tracks,
      motivation,
      experience,
      terms,
      updates,
    } = body

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !whatsapp ||
      !country ||
      !educationLevel ||
      !fieldOfStudy ||
      !institution ||
      !tracks.length ||
      !motivation ||
      !terms
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to database
    const { db } = await connectToDatabase()

    // Create application document
    const applicationData = {
      fullName,
      email,
      whatsapp,
      country,
      educationLevel,
      fieldOfStudy,
      institution,
      yearOfStudy: yearOfStudy || "",
      tracks,
      motivation,
      experience: experience || "",
      terms,
      updates,
      createdAt: new Date(),
      status: "pending_review",
      batch: "August 2025",
    }

    // Insert into database
    const result = await db.collection("applications").insertOne(applicationData)

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
