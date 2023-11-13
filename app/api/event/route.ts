import { NextResponse } from "next/server";
import connectMongoDB from "../../lib/mongodb";
import Event from "../../lib/event";

export async function GET(request: Request) {
  await connectMongoDB();
  const event = await Event.find();
  return NextResponse.json({ event })
}

export async function POST(request: Request) {
  const { _id, createdAt, title, date, location } = await request.json()
  await connectMongoDB();
  await Event.create({ _id, createdAt, title, date, location });
  return NextResponse.json({ message: 'event posted' })
}