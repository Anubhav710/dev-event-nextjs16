import EventCard from "@/components/ui/EventCard";
import ExploreBtn from "@/components/ui/ExploreBtn";
import { IEvent } from "@/database";

import Image from "next/image";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/events`);
  if (!response.ok) {
    console.error("Failed to fetch events:", await response.text());
    throw new Error("Failed to fetch events");
  }
  const data = await response.json();
  const events = data.events || [];

  return (
    <div>
      <h1 className="text-center capitalize">
        The Hub for every dev <br /> Event you can't Miss
      </h1>
      <p className="capitalize text-center mt-5">
        Hackathons, Meetups, and Conferences, All in one place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
