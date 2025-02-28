import { NextResponse } from "next/server";
import Subscriber from "@/app/models/Subscribe";
import { connectToDB } from "@/app/lib/db";

export async function GET() {
  // Connect to database
  await connectToDB();
  try {
    const subscribers = await Subscriber.find();
    return NextResponse.json({ success: true, data: subscribers });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching subscribers" },
      { status: 500 }
    );
  }
}
