import EventCard from "@/components/ui/EventCard";
import ExploreBtn from "@/components/ui/ExploreBtn";
import { IEvent } from "@/database";
import { events } from "@/lib/constants";

import Image from "next/image";

export default async function Home() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`
  // );
  // const { events } = await response.json();
  // console.log(events);

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
            events.map((event) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
