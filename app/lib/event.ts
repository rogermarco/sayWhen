import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    _id: String,
    title: String,
    date: String,
    location: String,
  }
)

const Event = mongoose.models.events || mongoose.model('events', eventSchema)

export default Event;