import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <div>
            <h1>All Events page</h1>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </div>
    )
}