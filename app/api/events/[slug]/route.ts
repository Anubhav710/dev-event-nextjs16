import { IEvent } from "@/database";
import { connectDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    //connect to database
    await connectDB();

    // await and extract slug
    const { slug } = await params;

    // validate slug paramter
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json(
        {
          message: "Invalid or missing slg paramerter",
        },
        { status: 400 }
      );
    }

    // sanitize slug
    const sanitizedSlug = slug.trim().toLocaleLowerCase();

    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    // Handle event is not found
    if (!event) {
      return NextResponse.json(
        {
          message: `Event with slug '${sanitizedSlug}' not found`,
        },
        { status: 404 }
      );
    }

    // Retrn successful response with event data
    return NextResponse.json(
      { message: "Event fetched successfully", event },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error ${error}` }, { status: 500 });
  }
}
