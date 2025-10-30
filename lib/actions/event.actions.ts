"use server";

import { connectDB } from "../mongoose";
import Event, { IEvent } from "@/database/event.model";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });
    // Find similar events by matching any of the tags, excluding the current event itself
    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean<IEvent[]>();
  } catch {
    return [];
  }
};
