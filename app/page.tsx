import EventCard from "@/components/ui/EventCard";
import ExploreBtn from "@/components/ui/ExploreBtn";
import { events } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
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
