import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Event from "../../../lib/event";

export async function GET(request: Request, { params }:any) {
  const { id } = params;
  await connectMongoDB();
  const event = await Event.findById({ _id: id });
  return NextResponse.json({ event })
}