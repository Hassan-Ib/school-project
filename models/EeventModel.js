import mongoose from "mongoose";

const { Schema } = mongoose;

const EventSchema = new Schema({
  date: {
    type: Date,
    required: ["true", "An Event must have a date"],
  },
  location: {
    type: String,
    required: ["true", "An event must have a Location"],
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tag: {
    type: [String],
    required: false,
    default: "faculty event",
  },
  title: {
    type: String,
    required: ["true", "An Event must have a title"],
    trim: true,
    uppercase: true,
  },
});

const EventModel =
  mongoose.models.Event || mongoose.model("Event", EventSchema);

export default EventModel;
